import requests
from bs4 import BeautifulSoup
import json

# URL do álbum do fornecedor
URL_YUPOO = "https://yupoo.com"

def buscar_dados():
    response = requests.get(URL_YUPOO)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    albuns = []
    # Este código procura as pastas/albuns na página
    for item in soup.find_all('div', class_='show_item'):
        titulo = item.find('a').get('title')
        link = "https:" + item.find('a').get('href')
        albuns.append({"nome": titulo, "link": link})
    
    # Guarda os links num ficheiro que o teu site vai ler
    with open('dados.json', 'w') as f:
        json.dump(albuns, f)

if __name__ == "__main__":
    buscar_dados()
