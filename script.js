const listaDiv = document.getElementById('lista');

// 1. BASE DE DADOS
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

// 2. MENUS DA HOME
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
        { id: "liga_pt", nome: "Liga Portugal", foto: "fotos/ligaportugal.png" }
    ]
};

// 3. NAVEGAÇÃO
function mostrarHome() {
    const btnRetro = document.getElementById('btn-retroceder');
    if (btnRetro) btnRetro.style.display = 'none';
    
    let html = `
        <div class="titulo-container"><h2 class="section-title">Seleções</h2></div>
        <div class="sub-grid">${menus.selecoes.map(item => criarCard(item, 'verSubCategoria')).join('')}</div>
        <div class="titulo-container"><h2 class="section-title">Ligas</h2></div>
        <div class="sub-grid">${menus.ligas.map(item => criarCard(item, 'verSubCategoria')).join('')}</div>
    `;
    listaDiv.innerHTML = html;
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
    window.scrollTo({ top: document.getElementById("catalogo-section").offsetTop - 50, behavior: 'smooth' });
}

function verDetalhesFinal(id, nome) {
    listaDiv.innerHTML = `
        <div class="titulo-container"><h2 class="section-title">${nome}</h2></div>
        <div style="text-align:center; padding:60px;">
            <p>Interessado na camisola <strong>${nome}</strong>?</p>
            <button class="btn-insta" onclick="window.open('https://instagram.com', '_blank')">CONSULTAR NO INSTAGRAM</button>
        </div>
    `;
}

// 4. MENU LATERAL
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = (sidebar.style.width === "250px") ? "0" : "250px";
}

function toggleSubMenu(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
}

function irParaCategoria(id, nome) {
    toggleMenu();
    verSubCategoria(id, nome);
}

function criarCard(item, funcaoClique) {
    return `<div class="card" onclick="${funcaoClique}('${item.id}', '${item.nome}')">
                <img src="${item.foto}" alt="${item.nome}" onerror="this.src='https://placehold.co'">
                <h3>${item.nome}</h3>
            </div>`;
}

document.addEventListener('DOMContentLoaded', mostrarHome);
