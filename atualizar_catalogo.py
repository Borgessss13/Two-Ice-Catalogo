import requests
from bs4 import BeautifulSoup
import json
import sys

URL_YUPOO = "https://yupoo.com"

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
}

def buscar_dados():
    try:
        print(f"A tentar aceder a: {URL_YUPOO}")
        response = requests.get(URL_YUPOO, headers=headers, timeout=15)
        
        if response.status_code != 200:
            print(f"Erro: O Yupoo respondeu com o código {response.status_code}")
            sys.exit(1)

        soup = BeautifulSoup(response.text, 'html.parser')
        albuns = []
        
        # Procura os álbuns na página
        items = soup.find_all('div', class_='show_item')
        print(f"Foram encontrados {len(items)} álbuns.")

        for item in items:
            a_tag = item.find('a', class_='album__main') or item.find('a')
            if a_tag:
                titulo = a_tag.get('title') or item.find('div', class_='album__title').text.strip()
                link = a_tag.get('href')
                if link and not link.startswith('http'):
                    link = "https:" + link
                
                albuns.append({"nome": titulo, "link": link})
        
        if not albuns:
            print("Aviso: Nenhum álbum foi extraído. A estrutura do site pode ter mudado.")
            sys.exit(1)

        with open('dados.json', 'w', encoding='utf-8') as f:
            json.dump(albuns, f, indent=4, ensure_ascii=False)
        
        print("Sucesso! O ficheiro dados.json foi criado com as camisolas.")

    except Exception as e:
        print(f"Ocorreu um erro fatal: {e}")
        sys.exit(1)

if __name__ == "__main__":
    buscar_dados()
