// Selecionar o container principal
const listaDiv = document.getElementById('lista');

// 1. BASE DE DADOS (Organizado por ID da Liga/Seleção)
const baseDeDados = {
    "liga_pt": [
        { id: "scp", nome: "Sporting", foto: "fotos/sporting.png" },
        { id: "fcp", nome: "FC Porto", foto: "fotos/porto.jpg" },
        { id: "slb", nome: "Benfica", foto: "fotos/benfica.png" }
    ],
    "portugal": [
        { id: "pt_home26", nome: "Portugal Principal 2026", foto: "camisolas/pthome26.jpg" },
        { id: "pt_away26", nome: "Portugal Away 2026", foto: "camisolas/ptaway26.jpg" },
        { id: "pt_treino26", nome: "Portugal Treino 2026", foto: "camisolas/pttrain26.png" },
        { id: "pt_treino_camoflagem26", nome: "Portugal Treino Camuflagem  2026", foto: "camisolas/pttraincamo26.jpg" },
        { id: "pt_away_mng_compr26", nome: "Portugal Away Manga Comprida 2026", foto: "camisolas/ptaaymngcomp26.png" },
        { id: "pt_edit_aniver26", nome: "Portugal Edição Aniversário 2026", foto: "camisolas/pteditaniver26.png" },
        { id: "pt_treino_sec26", nome: "Portugal Treino Secundária 2026", foto: "camisolas/pttrain226.png" },
        { id: "pt_special26", nome: "Portugal Edição Especial 2026", foto: "camisolas/ptspecial26.jpg" },
        { id: "pt_home24", nome: "Portugal Principar 2024", foto: "camisolas/pthome24.jpeg" },
  
    ]
};

// 2. MENUS PRINCIPAIS (Home)
const menus = {
    selecoes: [
        { id: "portugal", nome: "Portugal", foto: "fotos/portugal.png" },
        { id: "brasil", nome: "Brasil", foto: "fotos/brasil.png" },
        { id: "inglaterra", nome: "Inglaterra", foto: "fotos/inglaterra1.png" },
        { id: "franca", nome: "França", foto: "fotos/franca.jpeg" },
        { id: "argentina", nome: "Argentina", foto: "fotos/argentina.png" },
        { id: "alemanha", nome: "Alemanha", foto: "fotos/alemanha1.jpg" },
        { id: "espanha", nome: "Espanha", foto: "fotos/espanha.png" },
        { id: "italia", nome: "Itália", foto: "fotos/italia.png" }
    ],
    ligas: [
        { id: "liga_pt", nome: "Liga Portugal", foto: "fotos/ligaportugal.png" },
        { id: "premier", nome: "Premier League", foto: "fotos/premierligue.jpg" },
        { id: "laliga", nome: "La Liga", foto: "fotos/laliga.png" },
        { id: "serie_a", nome: "Serie A", foto: "fotos/seriea.jpg" },
        { id: "bundesliga", nome: "Bundesliga", foto: "fotos/bundesligue.png" },
        { id: "ligue1", nome: "Ligue 1", foto: "fotos/ligue1.png" },
        { id: "brasileirao", nome: "Brasileirão", foto: "fotos/brasileirao1.png" },
        { id: "saudi", nome: "Saudi Pro League", foto: "fotos/saudi.png" }
    ]
};

// 3. FUNÇÃO PARA MOSTRAR A HOME
function mostrarHome() {
    const btnRetro = document.getElementById('btn-retroceder');
    if (btnRetro) btnRetro.style.display = 'none';
    
    listaDiv.innerHTML = '';

    // Bloco Seleções
    listaDiv.innerHTML += '<div class="titulo-container"><h2 class="section-title">Seleções</h2></div>';
    let gridSel = '<div class="sub-grid">';
    menus.selecoes.forEach(item => gridSel += criarCard(item, 'verSubCategoria'));
    gridSel += '</div>';
    listaDiv.innerHTML += gridSel;

    // Bloco Ligas
    listaDiv.innerHTML += '<div class="titulo-container"><h2 class="section-title">Ligas</h2></div>';
    let gridLig = '<div class="sub-grid">';
    menus.ligas.forEach(item => gridLig += criarCard(item, 'verSubCategoria'));
    gridLig += '</div>';
    listaDiv.innerHTML += gridLig;
}

// 4. FUNÇÃO PARA VER CLUBES OU CAMISOLAS
function verSubCategoria(id, nome) {
    const btnRetro = document.getElementById('btn-retroceder');
    if (btnRetro) btnRetro.style.display = 'block';
    
    listaDiv.innerHTML = `<div class="titulo-container"><h2 class="section-title">${nome}</h2></div>`;
    
    const itens = baseDeDados[id];

    if (!itens) {
        listaDiv.innerHTML += `<p style="text-align:center; padding:40px; width:100%;">Catálogo de ${nome} brevemente disponível.</p>`;
        return;
    }

    let gridItens = '<div class="sub-grid">';
    itens.forEach(item => {
        gridItens += criarCard(item, 'verDetalhesFinal');
    });
    gridItens += '</div>';
    listaDiv.innerHTML += gridItens;
    
    // Faz scroll automático para o catálogo
    window.scrollTo(0, document.getElementById("catalogo-section").offsetTop - 50);
}

// 5. FUNÇÃO DETALHE FINAL (Botão Instagram)
function verDetalhesFinal(id, nome) {
    listaDiv.innerHTML = `
        <div class="titulo-container"><h2 class="section-title">${nome}</h2></div>
        <div style="text-align:center; padding:60px; width:100%;">
            <p style="margin-bottom:20px; font-size:18px;">Gostaste da camisola <strong>${nome}</strong>?</p>
            <button class="btn-insta" onclick="window.open('https://instagram.com', '_blank')">CONSULTAR NO INSTAGRAM</button>
        </div>
    `;
}

// AUXILIAR: Criar cards
function criarCard(item, funcaoClique) {
    return `
        <div class="card" onclick="${funcaoClique}('${item.id}', '${item.nome}')">
            <img src="${item.foto}" alt="${item.nome}" onerror="this.src='https://placehold.co'">
            <h3>${item.nome}</h3>
        </div>`;
}

// Inicialização
document.addEventListener('DOMContentLoaded', mostrarHome);
