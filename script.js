const listaDiv = document.getElementById('lista');

// 1. BASE DE DADOS COMPLETA (Camisolas e Clubes)
const baseDeDados = {
    "portugal": [
        { id: "pt_home26", nome: "Portugal Home 2026", foto: "camisolas/pthome26.jpg" },
        { id: "pt_away26", nome: "Portugal Away 2026", foto: "camisolas/ptaway26.jpg" },
        { id: "pt_train26", nome: "Portugal Treino 2026", foto: "camisolas/pttrain26.png" },
        { id: "pt_retro04", nome: "Portugal Retro 2004", foto: "camisolas/pt_home_retro04.jpg" },
        { id: "pt_special26", nome: "Portugal Edição Especial 2026", foto: "camisolas/ptspecial26.jpg" }
    ],
    "brasil": [
        { id: "br_home26", nome: "Brasil Home 2026", foto: "camisolas/brhome26.jpg" },
        { id: "br_away26", nome: "Brasil Away 2026", foto: "camisolas/braway26.jpg" },
        { id: "br_retro70", nome: "Brasil Retro 1970", foto: "camisolas/brretro70.jpg" }
    ],
    "liga_pt": [
        { id: "scp", nome: "Sporting CP", foto: "fotos/sporting.png" },
        { id: "fcp", nome: "FC Porto", foto: "fotos/porto.jpg" },
        { id: "slb", nome: "SL Benfica", foto: "fotos/benfica.png" }
    ],
    "premier": [
        { id: "manc", nome: "Manchester City", foto: "fotos/mancity.png" },
        { id: "liv", nome: "Liverpool FC", foto: "fotos/liverpool.png" },
        { id: "ars", nome: "Arsenal FC", foto: "fotos/arsenal.png" }
    ],
    "laliga": [
        { id: "rma", nome: "Real Madrid", foto: "fotos/realmadrid.png" },
        { id: "bar", nome: "FC Barcelona", foto: "fotos/barca.png" }
    ]
};

// 2. MENUS DA HOME
const menus = {
    selecoes: [
        { id: "portugal", nome: "Portugal", foto: "fotos/portugal.png" },
        { id: "brasil", nome: "Brasil", foto: "fotos/brasil.png" }
    ],
    ligas: [
        { id: "liga_pt", nome: "Liga Portugal", foto: "fotos/ligaportugal.png" },
        { id: "premier", nome: "Premier League", foto: "fotos/premierligue.jpg" },
        { id: "laliga", nome: "La Liga", foto: "fotos/laliga.png" }
    ]
};

// 3. FUNÇÕES DE NAVEGAÇÃO
function mostrarHome() {
    if (!listaDiv) return;
    const btnRetro = document.getElementById('btn-retroceder');
    if (btnRetro) btnRetro.style.display = 'none';
    
    listaDiv.innerHTML = `
        <div class="titulo-container"><h2 class="section-title">Seleções</h2></div>
        <div class="sub-grid">${menus.selecoes.map(item => criarCard(item, 'verSubCategoria')).join('')}</div>
        <div class="titulo-container"><h2 class="section-title">Ligas</h2></div>
        <div class="sub-grid">${menus.ligas.map(item => criarCard(item, 'verSubCategoria')).join('')}</div>
    `;
}

function verSubCategoria(id, nome) {
    const btnRetro = document.getElementById('btn-retroceder');
    if (btnRetro) btnRetro.style.display = 'block';
    
    const itens = baseDeDados[id];
    if (!itens) {
        listaDiv.innerHTML = `<div class="titulo-container"><h2 class="section-title">${nome}</h2></div><p style="text-align:center; padding:40px;">Brevemente disponível.</p>`;
        return;
    }

    listaDiv.innerHTML = `
        <div class="titulo-container"><h2 class="section-title">${nome}</h2></div>
        <div class="sub-grid">${itens.map(item => criarCard(item, 'verDetalhesFinal')).join('')}</div>
    `;
    fazerScroll();
}

function verDetalhesFinal(id, nome) {
    listaDiv.innerHTML = `
        <div class="titulo-container"><h2 class="section-title">${nome}</h2></div>
        <div style="text-align:center; padding:60px;">
            <p style="margin-bottom:20px; font-size:18px;">Interessado na camisola <strong>${nome}</strong>?</p>
            <button class="btn-insta" onclick="window.open('https://instagram.com', '_blank')">CONSULTAR NO INSTAGRAM</button>
        </div>
    `;
}

// 4. MENU LATERAL E SCROLL
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = (sidebar.style.width === "250px") ? "0" : "250px";
}

function toggleSubMenu(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
}

function irParaCategoria(id, nome) {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0"; // Fecha menu
    verSubCategoria(id, nome);
}

function fazerScroll() {
    const catalogo = document.getElementById("catalogo-section");
    window.scrollTo({ top: catalogo.offsetTop - 20, behavior: 'smooth' });
}

// 5. AUXILIAR CARD
function criarCard(item, funcaoClique) {
    return `<div class="card" onclick="${funcaoClique}('${item.id}', '${item.nome}')">
                <img src="${item.foto}" alt="${item.nome}" onerror="this.src='https://placehold.co'">
                <h3>${item.nome}</h3>
            </div>`;
}

document.addEventListener('DOMContentLoaded', mostrarHome);
