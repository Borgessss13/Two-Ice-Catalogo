const listaDiv = document.getElementById('lista');

// BASE DE DADOS COM OS TEUS FICHEIROS REAIS
const baseDeDados = {
    "Portugal": [
        { nome: "Home 2026", foto: "camisolas/pthome26.jpg" },
        { nome: "Away 2026", foto: "camisolas/ptaway26.jpg" },
        { nome: "Pre-Jogo 2026", foto: "camisolas/pt_pre_jogo26.jpg" },
        { nome: "Training 2026", foto: "camisolas/pttraining26.jpg" },
        { nome: "Treino Camuflagem", foto: "camisolas/pttraincamo26.jpg" },
        { nome: "Manga Comprida Away", foto: "camisolas/ptaaymngcomp26.png" },
        { nome: "Edição Aniversário", foto: "camisolas/pteditaniver26.png" },
        { nome: "Home 24/25", foto: "camisolas/24_25_pt_home.jpg" },
        { nome: "Away 24/25", foto: "camisolas/24_25_pt_away.jpg" },
        { nome: "Black Training 24/25", foto: "camisolas/24_25_pt_black_train.jpg" },
        { nome: "Special Red 24", foto: "camisolas/pt_speciaç_red24.jpg" },
        { nome: "Retro 2016", foto: "camisolas/pt_home_retro16.jpg" },
        { nome: "Retro 2010", foto: "camisolas/pt_away_retro010.jpg" },
        { nome: "Retro 2004", foto: "camisolas/pt_home_retro04.jpg" },
        { nome: "Eusébio Tribute", foto: "camisolas/pteusebio.jpg" }
    ],
    "Brasil": [
        { nome: "Home 2026", foto: "camisolas/brhome26.jpg" },
        { nome: "Away 2026", foto: "camisolas/braway26.jpg" },
        { nome: "Home 2024", foto: "camisolas/brhome24.jpg" },
        { nome: "Special 2026", foto: "camisolas/brspecial26.jpg" },
        { nome: "Special 2026 (V2)", foto: "camisolas/brspecial26 (2).jpg" },
        { nome: "Special 2025", foto: "camisolas/brspecial25.jpg" },
        { nome: "Retro 1970", foto: "camisolas/brretro70.jpg" },
        { nome: "Retro 1994", foto: "camisolas/brretro94.jpg" },
        { nome: "Edição Pelé", foto: "camisolas/brpele.jpg" },
        { nome: "Brasil Stussy 25", foto: "camisolas/BrStussy25.jpg" }
    ],
    "Ligas": [
        { nome: "Sporting CP", foto: "fotos/sporting.png" },
        { nome: "FC Porto", foto: "fotos/porto.jpg" },
        { nome: "SL Benfica", foto: "fotos/benfica.png" }
    ]
};

function carregarCatalogo() {
    if(!listaDiv) return;
    listaDiv.innerHTML = ""; 

    for (let categoria in baseDeDados) {
        listaDiv.innerHTML += `
            <div class="titulo-container">
                <h2 class="section-title">${categoria}</h2>
            </div>
        `;

        let gridHtml = '<div class="sub-grid">';
        baseDeDados[categoria].forEach(item => {
            gridHtml += `
                <div class="card" onclick="window.open('https://instagram.com', '_blank')">
                    <img src="${item.foto}" alt="${item.nome}" onerror="this.src='https://placehold.co...'">
                    <h3>${item.nome}</h3>
                    <button class="btn-insta">Ver no Instagram</button>
                </div>
            `;
        });
        gridHtml += '</div>';
        listaDiv.innerHTML += gridHtml;
    }
}

document.addEventListener('DOMContentLoaded', carregarCatalogo);

// Funções do Menu Lateral (apenas para scroll)
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = (sidebar.style.width === "250px") ? "0" : "250px";
}


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
