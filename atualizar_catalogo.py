import requests
import os
import json
from bs4 import BeautifulSoup

URL_YUPOO = "https://yupoo.com"
HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

def baixar_imagem(url, titulo):
    if not os.path.exists('camisolas'):
        os.makedirs('camisolas')
    
    # Cria um nome de ficheiro limpo
    nome_limpo = "".join([c for c in titulo if c.isalnum()]).rstrip()
    caminho = f"camisolas/{nome_limpo}.jpg"
    
    if not os.path.exists(caminho):
        try:
            img_data = requests.get(url, headers=HEADERS, timeout=15).content
            with open(caminho, 'wb') as f:
                f.write(img_data)
            return caminho
        except:
            return ""
    return caminho

def robot():
    res = requests.get(URL_YUPOO, headers=HEADERS)
    soup = BeautifulSoup(res.text, 'html.parser')
    albuns = soup.find_all('div', class_='show_item')[:15] # Baixa as primeiras 15
    
    dados_finais = []
    for a in albuns:
        link_tag = a.find('a', class_='album__main')
        img_tag = a.find('img')
        
        if link_tag and img_tag:
            titulo = link_tag.get('title')
            # Pega a foto e transforma o link pequeno em link médio/grande
            img_url = "https:" + img_tag.get('data-src', img_tag.get('src')).replace('small', 'medium')
            
            caminho_local = baixar_imagem(img_url, titulo)
            if caminho_local:
                dados_finais.append({"nome": titulo, "foto": caminho_local})

    with open('dados.json', 'w', encoding='utf-8') as f:
        json.dump(dados_finais, f, indent=4)

if __name__ == "__main__":
    robot()
