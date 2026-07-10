import logging
import os
import sys
import json

import requests
from bs4 import BeautifulSoup

# CONFIGURAÇÃO
PALAVRA_CHAVE = "Sporting"  # Muda aqui para "Benfica", "Porto", etc.
URL_BASE = "https://yupoo.com"
HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
TIMEOUT = 30  # segundos

logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')
logger = logging.getLogger(__name__)


def baixar_album(a):
    """Extrai e baixa uma camisola de um álbum.

    Devolve o dicionário de dados em caso de sucesso, ou None se o álbum
    não corresponder ao filtro ou não tiver a informação esperada.
    Erros de rede/escrita são propagados para quem chama.
    """
    link = a.find('a', class_='album__main')
    if link is None:
        logger.warning("Álbum sem link 'album__main'; ignorado.")
        return None

    titulo = link.get('title')
    if not titulo:
        logger.warning("Álbum sem título; ignorado.")
        return None

    # FILTRO: Só baixa se o nome tiver a palavra que queres
    if PALAVRA_CHAVE.lower() not in titulo.lower():
        return None

    img_tag = a.find('img')
    if img_tag is None:
        logger.warning("Álbum '%s' sem imagem; ignorado.", titulo)
        return None

    src = img_tag.get('data-src') or img_tag.get('src')
    if not src:
        logger.warning("Imagem de '%s' sem 'src'; ignorado.", titulo)
        return None

    img_url = "https:" + src.replace('small', 'medium')
    nome_arq = "".join(x for x in titulo if x.isalnum())[:30]
    caminho_local = f"camisolas/{nome_arq}.jpg"

    resp = requests.get(img_url, headers=HEADERS, timeout=TIMEOUT)
    resp.raise_for_status()

    with open(caminho_local, 'wb') as f:
        f.write(resp.content)

    logger.info("Baixado: %s", titulo)
    return {"nome": titulo, "foto": caminho_local}


def robot():
    os.makedirs('camisolas', exist_ok=True)

    res = requests.get(URL_BASE, headers=HEADERS, timeout=TIMEOUT)
    res.raise_for_status()

    soup = BeautifulSoup(res.text, 'html.parser')
    albuns = soup.find_all('div', class_='show_item')

    dados_finais = []
    falhas = 0

    for a in albuns:
        try:
            dados = baixar_album(a)
        except requests.RequestException as e:
            # Falha ao baixar uma imagem específica: regista e continua,
            # mas não engole silenciosamente o erro.
            falhas += 1
            logger.error("Falha ao baixar um álbum: %s", e)
            continue
        except OSError as e:
            falhas += 1
            logger.error("Falha ao gravar ficheiro de um álbum: %s", e)
            continue

        if dados is not None:
            dados_finais.append(dados)

    with open('dados.json', 'w', encoding='utf-8') as f:
        json.dump(dados_finais, f, indent=4)

    logger.info(
        "Concluído: %d camisolas gravadas, %d falhas.",
        len(dados_finais),
        falhas,
    )
    return falhas


if __name__ == "__main__":
    try:
        falhas = robot()
    except requests.RequestException as e:
        logger.error("Erro de rede ao aceder ao site: %s", e)
        sys.exit(1)
    except OSError as e:
        logger.error("Erro de ficheiro: %s", e)
        sys.exit(1)

    # Assinala falhas parciais para que a automação não passe silenciosamente.
    if falhas:
        sys.exit(1)
