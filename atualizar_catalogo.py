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
        
    res = requests.get(URL_BASE, headers=HEADERS)
    soup = BeautifulSoup(res.text, 'html.parser')
    albuns = soup.find_all('div', class_='show_item')
    
    dados_finais = []
    
    for a in albuns:
        titulo = a.find('a', class_='album__main').get('title')
        
        # FILTRO: Só baixa se o nome tiver a palavra que queres
        if PALAVRA_CHAVE.lower() in titulo.lower():
            img_tag = a.find('img')
            img_url = "https:" + img_tag.get('data-src', img_tag.get('src')).replace('small', 'medium')
            
            nome_arq = "".join(x for x in titulo if x.isalnum())[:30]
            caminho_local = f"camisolas/{nome_arq}.jpg"
            
            try:
                img_data = requests.get(img_url, headers=HEADERS).content
                with open(caminho_local, 'wb') as f:
                    f.write(img_data)
                dados_finais.append({"nome": titulo, "foto": caminho_local})
                print(f"Baixado: {titulo}")
            except:
                continue

    with open('dados.json', 'w', encoding='utf-8') as f:
        json.dump(dados_finais, f, indent=4)

if __name__ == "__main__":
    robot()
