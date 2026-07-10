import requests
import os
import json
from bs4 import BeautifulSoup

# CONFIGURAÇÃO
PALAVRA_CHAVE = "Sporting" # Muda aqui para "Benfica", "Porto", etc.
URL_BASE = "https://yupoo.com"
HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

def robot():
    if not os.path.exists('camisolas'):
        os.makedirs('camisolas')
        
    res = requests.get(URL_BASE, headers=HEADERS, timeout=30)
    soup = BeautifulSoup(res.text, 'html.parser')
    albuns = soup.find_all('div', class_='show_item')
    
    dados_finais = []
    
    for a in albuns:
        link = a.find('a', class_='album__main')
        titulo = link.get('title') if link else None
        if not titulo:
            continue
        
        # FILTRO: Só baixa se o nome tiver a palavra que queres
        if PALAVRA_CHAVE.lower() in titulo.lower():
            img_tag = a.find('img')
            raw_src = img_tag.get('data-src', img_tag.get('src')) if img_tag else None
            if not raw_src:
                continue
            raw_src = raw_src.replace('small', 'medium')
            # Normaliza o esquema sem duplicar http(s):
            if raw_src.startswith('//'):
                img_url = 'https:' + raw_src
            elif raw_src.startswith(('http://', 'https://')):
                img_url = raw_src
            else:
                continue
            
            nome_arq = "".join(x for x in titulo if x.isalnum())[:30]
            caminho_local = f"camisolas/{nome_arq}.jpg"
            
            try:
                img_data = requests.get(img_url, headers=HEADERS, timeout=30).content
                with open(caminho_local, 'wb') as f:
                    f.write(img_data)
                dados_finais.append({"nome": titulo, "foto": caminho_local})
                print(f"Baixado: {titulo}")
            except requests.RequestException as e:
                print(f"Falha ao baixar {titulo}: {e}")
                continue

    with open('dados.json', 'w', encoding='utf-8') as f:
        json.dump(dados_finais, f, indent=4)

if __name__ == "__main__":
    robot()
