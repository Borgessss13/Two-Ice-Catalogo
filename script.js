const listaDiv = document.getElementById('lista');
const breadcrumb = document.getElementById('breadcrumb');

// 1. A TUA BASE DE DADOS (Adiciona aqui as camisolas)
const baseDeDados = [
    { id: "portugal", categoria: "selecao", nome: "Portugal Home 24/25", foto: "camisolas/portugal_1.jpg" },
    { id: "portugal", categoria: "selecao", nome: "Portugal Away 24/25", foto: "camisolas/portugal_2.jpg" },
    { id: "brasil", categoria: "selecao", nome: "Brasil Principal", foto: "camisolas/brasil_1.jpg" },
    { id: "premier", categoria: "liga", nome: "Arsenal Home", foto: "camisolas/arsenal.jpg" },
    { id: "premier", categoria: "liga", nome: "Man City Home", foto: "camisolas/city.jpg" }
];

// 2. CONFIGURAÇÃO DOS MENUS (Categorias)
const menus = {
    selecoes: [
        { id: "portugal", nome: "Portugal", foto: "fotos/portugal.png" },
        { id: "brasil", nome: "Brasil", foto: "fotos/brasil.png" }
    ],
    ligas: [
        { id: "premier", nome: "Premier League", foto: "fotos/premier_logo.png" },
        { id: "liga_pt", nome: "Liga Portugal", foto: "fotos/liga_pt_logo.png" }
    ]
};

// FUNÇÃO PARA MOSTRAR A HOME (SELEÇÕES E LIGAS)
function mostrarHome() {
    document.getElementById('btn-retroceder').style.display = 'none';
    listaDiv.innerHTML = '';

    // --- BLOCO SELEÇÕES ---
    const htmlSelecoes = `
        <div class="titulo-container"><h2 class="section-title">Seleções</h2></div>
        <div class="sub-grid">
            ${menus.selecoes.map(item => criarCardCategoria(item)).join('')}
        </div>
    `;
    listaDiv.innerHTML += htmlSelecoes;

    // --- BLOCO LIGAS ---
    const htmlLigas = `
        <div class="titulo-container"><h2 class="section-title">Ligas</h2></div>
        <div class="sub-grid">
            ${menus.ligas.map(item => criarCardCategoria(item)).join('')}
        </div>
    `;
    listaDiv.innerHTML += htmlLigas;
}

    // --- SECÇÃO LIGAS ---
    listaDiv.innerHTML += '<div class="titulo-container"><h2 class="section-title">Ligas</h2></div>';
    
    let gridLigas = '<div class="sub-grid">';
    menus.ligas.forEach(item => {
        gridLigas += criarCardCategoria(item);
    });
    gridLigas += '</div>';
    listaDiv.innerHTML += gridLigas;
}


    // Renderizar Ligas
    listaDiv.innerHTML += '<h2 class="section-title">Ligas</h2><div class="sub-grid" id="grid-ligas"></div>';
    const gridLig = document.getElementById('grid-ligas');
    menus.ligas.forEach(item => {
        gridLig.innerHTML += criarCardCategoria(item);
    });
}

// CRIA O CARD DA CATEGORIA (Logo da Seleção/Liga)
function criarCardCategoria(item) {
    return `
        <div class="card" onclick="verCamisolas('${item.id}', '${item.nome}')">
            <img src="${item.foto}" alt="${item.nome}">
            <h3>${item.nome}</h3>
        </div>`;
}

// MOSTRA AS CAMISOLAS DA CATEGORIA CLICADA
function verCamisolas(idAlvo, nomeAlvo) {
    listaDiv.innerHTML = '';
    breadcrumb.innerHTML = `<button onclick="mostrarHome()" class="btn-voltar">⬅ Voltar para Categorias</button> <span class="path"> > ${nomeAlvo}</span>`;

    // Filtra na base de dados apenas o que corresponde ao ID (ex: 'portugal')
    const filtrados = baseDeDados.filter(c => c.id === idAlvo);

    if (filtrados.length === 0) {
        listaDiv.innerHTML = '<p style="padding:20px;">Brevemente disponíveis...</p>';
        return;
    }

    let gridCamisolas = '<div class="sub-grid">';
    filtrados.forEach(c => {
        gridCamisolas += `
            <div class="card">
                <img src="${c.foto}" alt="${c.nome}">
                <h3>${c.nome}</h3>
                <button class="btn-insta" onclick="window.open('https://instagram.com._', '_blank')">VER NO INSTAGRAM</button>
            </div>`;
    });
    gridCamisolas += '</div>';
    listaDiv.innerHTML += gridCamisolas;
}

// Garante que o catálogo carrega assim que a página abre
window.onload = function() {
    mostrarHome();
};

// Este código força o catálogo a aparecer mal o site abre
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mostrarHome);
} else {
    mostrarHome();
}

