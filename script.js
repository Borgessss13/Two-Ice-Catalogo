// 1. SELEÇÃO DE ELEMENTOS
const listaDiv = document.getElementById('lista');

// 2. BASE DE DADOS (Unificada - Sem duplicações)
const baseDeDados = {
    "portugal": [
        { id: "pt_home26", nome: "Portugal Home 2026", foto: "camisolas/pthome26.jpg" },
        { id: "pt_away26", nome: "Portugal Away 2026", foto: "camisolas/ptaway26.jpg" },
        { id: "pt_train26", nome: "Portugal Treino 2026", foto: "camisolas/pttrain26.png" },
        { id: "pt_retro04", nome: "Portugal Retro 2004", foto: "camisolas/pt_home_retro04.jpg" }
    ],
    "brasil": [
        { id: "brhome26", nome: "Brasil Home 2026", foto: "camisolas/brhome26.jpg" },
        { id: "braway26", nome: "Brasil Away 2026", foto: "camisolas/braway26.jpg" }
    ],
    "liga_pt": [
        { id: "scp", nome: "Sporting", foto: "fotos/sporting.png" },
        { id: "fcp", nome: "FC Porto", foto: "fotos/porto.jpg" },
        { id: "slb", nome: "Benfica", foto: "fotos/benfica.png" }
    ]
};

// 3. MENUS PRINCIPAIS (Home)
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

// 4. FUNÇÕES DE NAVEGAÇÃO
function mostrarHome() {
    const btnRetro = document.getElementById('btn-retroceder');
    if (btnRetro) btnRetro.style.display = 'none';
    
    listaDiv.innerHTML = '';

    listaDiv.innerHTML += '<div class="titulo-container"><h2 class="section-title">Seleções</h2></div>';
    let gridSel = '<div class="sub-grid">';
    menus.selecoes.forEach(item => { gridSel += criarCard(item, 'verSubCategoria'); });
    gridSel += '</div>';
    listaDiv.innerHTML += gridSel;

    listaDiv.innerHTML += '<div class="titulo-container"><h2 class="section-title">Ligas</h2></div>';
    let gridLig = '<div class="sub-grid">';
    menus.ligas.forEach(item => { gridLig += criarCard(item, 'verSubCategoria'); });
    gridLig += '</div>';
    listaDiv.innerHTML += gridLig;
}

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
    itens.forEach(item => { gridItens += criarCard(item, 'verDetalhesFinal'); });
    gridItens += '</div>';
    listaDiv.innerHTML += gridItens;
    
    window.scrollTo(0, document.getElementById("catalogo-section").offsetTop - 50);
}

function verDetalhesFinal(id, nome) {
    listaDiv.innerHTML = `
        <div class="titulo-container"><h2 class="section-title">${nome}</h2></div>
        <div style="text-align:center; padding:60px; width:100%;">
            <p style="margin-bottom:20px; font-size:18px;">Gostaste da camisola <strong>${nome}</strong>?</p>
            <button class="btn-insta" onclick="window.open('https://instagram.com', '_blank')">CONSULTAR NO INSTAGRAM</button>
        </div>
    `;
}

// 5. FUNÇÕES DO MENU LATERAL (SIDEBAR)
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

function toggleSubMenu(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
}

function irParaCategoria(id, nome) {
    toggleMenu(); 
    verSubCategoria(id, nome);
    setTimeout(() => {
        const catalogo = document.getElementById("catalogo-section");
        window.scrollTo({ top: catalogo.offsetTop - 20, behavior: 'smooth' });
    }, 300);
}

// 6. FUNÇÃO DE PESQUISA
function filtrarCamisolas() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    if (input.length > 0) {
        listaDiv.innerHTML = '<div class="titulo-container"><h2 class="section-title">Resultados</h2></div>';
        let gridRes = '<div class="sub-grid">';
        let encontrou = false;
        for (let cat in baseDeDados) {
            baseDeDados[cat].forEach(item => {
                if (item.nome.toLowerCase().includes(input)) {
                    gridRes += criarCard(item, 'verDetalhesFinal');
                    encontrou = true;
                }
            });
        }
        gridRes += '</div>';
        listaDiv.innerHTML += encontrou ? gridRes : '<p style="text-align:center; padding:40px;">Sem resultados.</p>';
    } else {
        mostrarHome();
    }
}

// 7. AUXILIARES
function criarCard(item, funcaoClique) {
    return `
        <div class="card" onclick="${funcaoClique}('${item.id}', '${item.nome}')">
            <img src="${item.foto}" alt="${item.nome}" onerror="this.src='https://placehold.co'">
            <h3>${item.nome}</h3>
        </div>`;
}

document.addEventListener('DOMContentLoaded', mostrarHome);
