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
const listaDiv = document.getElementById('lista');

// ESTRUTURA DE DADOS (Exemplo de como deves preencher)
const categorias = {
    selecoes: [
        { nome: "Portugal", foto: "fotos/portugal_logo.jpg", link: "LINK_YUPPO_PORTUGAL" },
        { nome: "Brasil", foto: "fotos/brasil_logo.jpg", link: "LINK_YUPPO_BRASIL" },
        { nome: "França", foto: "fotos/franca_logo.jpg", link: "LINK_YUPPO_FRANCA" }
    ],
    ligas: [
        { nome: "Liga Portugal", foto: "fotos/liga_pt.jpg", link: "LINK_YUPPO_LIGA_PT" },
        { nome: "Premier League", foto: "fotos/premier_league.jpg", link: "LINK_YUPPO_PREMIER" },
        { nome: "La Liga", foto: "fotos/la_liga.jpg", link: "LINK_YUPPO_LALIGA" }
    ]
};

function carregarHome() {
    listaDiv.innerHTML = '';

    // SECÇÃO SELECÇÕES
    listaDiv.innerHTML += '<h2 class="section-title">Seleções</h2>';
    let gridSelecoes = '<div class="sub-grid">';
    categorias.selecoes.forEach(item => {
        gridSelecoes += criarCard(item);
    });
    gridSelecoes += '</div>';
    listaDiv.innerHTML += gridSelecoes;

    // SECÇÃO LIGAS
    listaDiv.innerHTML += '<h2 class="section-title">Ligas</h2>';
    let gridLigas = '<div class="sub-grid">';
    categorias.ligas.forEach(item => {
        gridLigas += criarCard(item);
    });
    gridLigas += '</div>';
    listaDiv.innerHTML += gridLigas;
}

function criarCard(item) {
    return `
        <div class="card" onclick="window.open('${item.link}', '_blank')">
            <img src="${item.foto}" alt="${item.nome}">
            <h3>${item.nome}</h3>
        </div>
    `;
}

// Inicia o site
carregarHome();

