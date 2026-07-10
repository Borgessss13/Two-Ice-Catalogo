import json
import os
from unittest import mock

import pytest

import atualizar_catalogo


HTML_LISTA = """
<html><body>
    <div class="show_item">
        <a class="album__main" title="Sporting CP 25/26"></a>
        <img data-src="//img.example.com/small/sporting.jpg" src="//img.example.com/fallback.jpg">
    </div>
    <div class="show_item">
        <a class="album__main" title="Benfica Home 25/26"></a>
        <img data-src="//img.example.com/small/benfica.jpg">
    </div>
</body></html>
"""


def _fake_get(url, headers=None):
    """Return a page response for the base URL and image bytes otherwise."""
    resp = mock.Mock()
    if url == atualizar_catalogo.URL_BASE:
        resp.text = HTML_LISTA
    else:
        resp.content = b"fake-image-bytes"
    return resp


@pytest.fixture
def in_tmp_dir(tmp_path, monkeypatch):
    monkeypatch.chdir(tmp_path)
    return tmp_path


def test_robot_creates_camisolas_dir(in_tmp_dir):
    with mock.patch.object(atualizar_catalogo.requests, "get", side_effect=_fake_get):
        atualizar_catalogo.robot()
    assert (in_tmp_dir / "camisolas").is_dir()


def test_robot_filters_by_keyword(in_tmp_dir):
    with mock.patch.object(atualizar_catalogo.requests, "get", side_effect=_fake_get):
        atualizar_catalogo.robot()

    dados = json.loads((in_tmp_dir / "dados.json").read_text(encoding="utf-8"))
    nomes = [d["nome"] for d in dados]
    assert nomes == ["Sporting CP 25/26"]
    assert all("benfica" not in n.lower() for n in nomes)


def test_robot_writes_image_and_records_path(in_tmp_dir):
    with mock.patch.object(atualizar_catalogo.requests, "get", side_effect=_fake_get):
        atualizar_catalogo.robot()

    dados = json.loads((in_tmp_dir / "dados.json").read_text(encoding="utf-8"))
    assert len(dados) == 1
    foto = dados[0]["foto"]
    # Sanitized filename: only alphanumerics, capped at 30 chars.
    assert foto == "camisolas/SportingCP2526.jpg"
    assert (in_tmp_dir / foto).read_bytes() == b"fake-image-bytes"


def test_robot_requests_medium_image_url(in_tmp_dir):
    calls = []

    def tracking_get(url, headers=None):
        calls.append(url)
        return _fake_get(url, headers=headers)

    with mock.patch.object(atualizar_catalogo.requests, "get", side_effect=tracking_get):
        atualizar_catalogo.robot()

    img_calls = [u for u in calls if u != atualizar_catalogo.URL_BASE]
    assert img_calls == ["https://img.example.com/medium/sporting.jpg"]


def test_robot_reuses_existing_camisolas_dir(in_tmp_dir):
    os.makedirs(in_tmp_dir / "camisolas")
    with mock.patch.object(atualizar_catalogo.requests, "get", side_effect=_fake_get):
        # Should not raise even though the directory already exists.
        atualizar_catalogo.robot()
    assert (in_tmp_dir / "dados.json").exists()


def test_robot_skips_album_when_download_fails(in_tmp_dir):
    def failing_get(url, headers=None):
        if url == atualizar_catalogo.URL_BASE:
            resp = mock.Mock()
            resp.text = HTML_LISTA
            return resp
        raise RuntimeError("network down")

    with mock.patch.object(atualizar_catalogo.requests, "get", side_effect=failing_get):
        atualizar_catalogo.robot()

    dados = json.loads((in_tmp_dir / "dados.json").read_text(encoding="utf-8"))
    assert dados == []


def test_robot_uses_src_when_data_src_missing(in_tmp_dir):
    html = """
    <html><body>
        <div class="show_item">
            <a class="album__main" title="Sporting Away"></a>
            <img src="//img.example.com/small/only-src.jpg">
        </div>
    </body></html>
    """

    def get(url, headers=None):
        resp = mock.Mock()
        if url == atualizar_catalogo.URL_BASE:
            resp.text = html
        else:
            resp.content = b"img"
        return resp

    with mock.patch.object(atualizar_catalogo.requests, "get", side_effect=get):
        atualizar_catalogo.robot()

    dados = json.loads((in_tmp_dir / "dados.json").read_text(encoding="utf-8"))
    assert dados[0]["foto"] == "camisolas/SportingAway.jpg"
