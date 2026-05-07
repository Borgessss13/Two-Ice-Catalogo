const listaDiv = document.getElementById('lista');

async function carregarDados() {
    try {
        const response = await fetch('dados.json');
        const camisolas = await response.json();

        if (camisolas.length === 0) {
            listaDiv.innerHTML = "<p>A carregar catálogo...</p>";
            return;
        }

        listaDiv.innerHTML = '';
        camisolas.forEach((item) => {
            let card = `
                <div class="card">
                    <img src="${item.foto}" alt="${item.nome}">
                    <h3>${item.nome}</h3>
                    <button class="btn-insta" onclick="irParaInstagram()">
                        VER NO INSTAGRAM
                    </button>
                </div>`;
            listaDiv.innerHTML += card;
        });
    } catch (error) {
        listaDiv.innerHTML = "<p>Erro ao carregar o catálogo.</p>";
    }
}

function irParaInstagram() {
    window.open('https://instagram.com', '_blank');
}

carregarDados();
