import requests
import os
import json
from bs4 import BeautifulSoup

URL_YUPOO = "https://yupoo.com"
HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

def robot():
    if not os.path.exists('camisolas'):
        os.makedirs('camisolas')
        
    res = requests.get(URL_YUPOO, headers=HEADERS)
    soup = BeautifulSoup(res.text, 'html.parser')
    albuns = soup.find_all('div', class_='show_item')[:10] 
    
    dados_finais = []
    for a in albuns:
        link_tag = a.find('a', class_='album__main')
        img_tag = a.find('img')
        
        if link_tag and img_tag:
            titulo = link_tag.get('title')
            # Limpa o nome para o ficheiro
            nome_arq = "".join(x for x in titulo if x.isalnum())[:30]
            img_url = "https:" + img_tag.get('data-src', img_tag.get('src')).replace('small', 'medium')
            
            caminho_local = f"camisolas/{nome_arq}.jpg"
            
            # Baixa a foto
            try:
                img_data = requests.get(img_url, headers=HEADERS).content
                with open(caminho_local, 'wb') as f:
                    f.write(img_data)
                dados_finais.append({"nome": titulo, "foto": caminho_local})
                print(f"Baixou: {titulo}")
            except:
                continue

    with open('dados.json', 'w', encoding='utf-8') as f:
        json.dump(dados_finais, f, indent=4)

if __name__ == "__main__":
    robot()
