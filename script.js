const listaDiv = document.getElementById('lista');

// Esta função vai buscar o ficheiro que o robô criou
async function carregarDados() {
    try {
        const response = await fetch('dados.json');
        const dados = await response.json();
        mostrarAlbuns(dados);
    } catch (error) {
        console.error("Erro ao carregar os dados:", error);
        listaDiv.innerHTML = "Erro ao carregar o catálogo.";
    }
}

function mostrarAlbuns(albuns) {
    listaDiv.innerHTML = '';
    albuns.forEach((album) => {
        // Cria um "card" para cada álbum do fornecedor
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${album.nome}</h3>
            <a href="${album.link}" target="_blank">Ver no Yupoo</a>
        `;
        listaDiv.innerHTML += card.outerHTML;
    });
}

carregarDados();
