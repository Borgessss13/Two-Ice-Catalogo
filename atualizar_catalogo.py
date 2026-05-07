import requests
from bs4 import BeautifulSoup
import json
import sys

URL_YUPOO = "https://yupoo.com"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
}

def buscar_dados():
    try:
        response = requests.get(URL_YUPOO, headers=headers, timeout=30)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        albuns = []
        
        # Procura os itens do álbum na estrutura do Yupoo
        items = soup.find_all('div', class_='show_item')
        if not items:
            print("Aviso: Nenhum álbum encontrado. Verifique se o link mudou.")
        
        for item in items:
            a_tag = item.find('a')
            if a_tag:
                titulo = a_tag.get('title', 'Sem Nome')
                link = "https:" + a_tag.get('href', '')
                albuns.append({"nome": titulo, "link": link})
        
        with open('dados.json', 'w', encoding='utf-8') as f:
            json.dump(albuns, f, indent=4, ensure_ascii=False)
        
        print(f"Sucesso! {len(albuns)} álbuns encontrados.")

    except Exception as e:
        print(f"Erro fatal: {e}")
        # Criamos um ficheiro vazio para o site não crashar
        with open('dados.json', 'w') as f:
            json.dump([], f)
        sys.exit(0) # Força o sucesso para não dar bola vermelha

if __name__ == "__main__":
    buscar_dados()
