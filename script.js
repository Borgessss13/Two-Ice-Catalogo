const listaDiv = document.getElementById('lista');

// 1. LISTA MANUAL (Coloca aqui as tuas camisolas favoritas)
// Podes usar links de fotos que tenhas no Instagram ou noutros sites
const camisolasManuais = [
    { 
        nome: "Camisola Principal - Época 24/25", 
        foto: "https://placehold.co" 
    },
    { 
        nome: "Camisola Alternativa - Época 24/25", 
        foto: "https://placehold.co" 
    }
];

async function carregarDados() {
    try {
        const response = await fetch('dados.json?v=' + new Date().getTime());
        let camisolas = await response.json();

        // Se o robô não encontrar nada no Yupoo, usa a tua lista manual
        if (!camisolas || camisolas.length === 0) {
            console.log("Robô vazio, a carregar lista manual...");
            camisolas = camisolasManuais;
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
        console.log("Erro ao ler JSON, a usar manual...");
        renderizarLista(camisolasManuais);
    }
}

function renderizarLista(lista) {
    listaDiv.innerHTML = '';
    lista.forEach((item) => {
        listaDiv.innerHTML += `
            <div class="card">
                <img src="${item.foto}" alt="${item.nome}">
                <h3>${item.nome}</h3>
                <button class="btn-insta" onclick="irParaInstagram()">
                    VER NO INSTAGRAM
                </button>
            </div>`;
    });
}

function irParaInstagram() {
    window.open('https://instagram.com', '_blank');
}

carregarDados();
