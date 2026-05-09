const listaDiv = document.getElementById('lista');

// 1. BASE DE DADOS (Organizada para abrir ao clicar)
const baseDeDados = {
    "portugal": [
        { nome: "Home 2026", foto: "camisolas/pthome26.jpg" },
        { nome: "Away 2026", foto: "camisolas/ptaway26.jpg" },
        { nome: "Pre-Jogo 2026", foto: "camisolas/pt_pre_jogo26.jpg" },
        { nome: "Training 2026", foto: "camisolas/pttraining26.jpg" },
        { nome: "Retro 2004", foto: "camisolas/pt_home_retro04.jpg" },
        { nome: "Eusébio Tribute", foto: "camisolas/pteusebio.jpg" }
    ],
    "brasil": [
        { nome: "Home 2026", foto: "camisolas/brhome26.jpg" },
        { nome: "Away 2026", foto: "camisolas/braway26.jpg" },
        { nome: "Special 2026", foto: "camisolas/brspecial26.jpg" },
        { nome: "Retro 1970", foto: "camisolas/brretro70.jpg" }
    ],
    "liga_pt": [
        { nome: "Sporting CP", foto: "fotos/sporting.png" },
        { nome: "FC Porto", foto: "fotos/porto.jpg" },
        { nome: "SL Benfica", foto: "fotos/benfica.png" }
    ]
};

// 2. O QUE APARECE NA HOME (Os Símbolos)
const menus = {
    selecoes: [
        { id: "portugal", nome: "Portugal", foto: "fotos/portugal.png" },
        { id: "brasil", nome: "Brasil", foto: "fotos/brasil.png" },
        { id: "argentina", nome: "Argentina", foto: "fotos/argentina.png" },
        { id: "franca", nome: "França", foto: "fotos/franca.jpeg" },
        { id: "alemanha", nome: "Alemanha", foto: "fotos/alemanha.png" },
        { id: "espanha", nome: "Espanha", foto: "fotos/espanha.png" },
        { id: "inglaterra", nome: "Inglaterra", foto: "fotos/inglaterra.png" },
        { id: "italia", nome: "Itália", foto: "fotos/italia.png" }
    ],
    ligas: [
        { id: "liga_pt", nome: "Liga Portugal", foto: "fotos/ligaportugal.png" },
        { id: "premier", nome: "Premier League", foto: "fotos/premierligue.jpg" },
        { id: "laliga", nome: "La Liga", foto: "fotos/laliga.png" },
        { id: "seriea", nome: "Serie A", foto: "fotos/seriea.jpg" },
        { id: "bundesliga", nome: "Bundesliga", foto: "fotos/bundesligue.png" }
    ]
};

// 3. FUNÇÃO PARA MOSTRAR OS SÍMBOLOS (HOME)
function mostrarHome() {
    const btnRetro = document.getElementById('btn-retroceder');
    if (btnRetro) btnRetro.style.display = 'none';
    
    listaDiv.innerHTML = `
        <div class="titulo-container"><h2 class="section-title">Seleções</h2></div>
        <div class="sub-grid">${menus.selecoes.map(item => criarCard(item, 'verSubCategoria')).join('')}</div>
        <div class="titulo-container"><h2 class="section-title">Ligas</h2></div>
        <div class="sub-grid">${menus.ligas.map(item => criarCard(item, 'verSubCategoria')).join('')}</div>
    `;
}

// 4. FUNÇÃO QUE ABRE AS CAMISOLAS AO CLICAR NO SÍMBOLO
function verSubCategoria(id, nome) {
    const btnRetro = document.getElementById('btn-retroceder');
    if (btnRetro) btnRetro.style.display = 'block';
    
    const itens = baseDeDados[id];
    if (!itens) {
        listaDiv.innerHTML = `
            <div class="titulo-container"><h2 class="section-title">${nome}</h2></div>
            <p style="text-align:center; padding:40px;">Catálogo brevemente disponível no Instagram.</p>
            <div style="text-align:center;"><button class="btn-insta" onclick="window.open('https://instagram.com')">Ir para Instagram</button></div>
        `;
        return;
    }

    listaDiv.innerHTML = `
        <div class="titulo-container"><h2 class="section-title">${nome}</h2></div>
        <div class="sub-grid">${itens.map(item => criarCard(item, 'verDetalhesFinal')).join('')}</div>
    `;
    window.scrollTo({ top: document.getElementById("catalogo-section").offsetTop - 50, behavior: 'smooth' });
}

// 5. DETALHE FINAL (BOTÃO INSTAGRAM)
function verDetalhesFinal(id, nome) {
    listaDiv.innerHTML = `
        <div class="titulo-container"><h2 class="section-title">${nome}</h2></div>
        <div style="text-align:center; padding:60px;">
            <p style="font-size:18px; margin-bottom:20px;">Gostaste desta camisola?</p>
            <button class="btn-insta" onclick="window.open('https://instagram.com', '_blank')">CONSULTAR NO INSTAGRAM</button>
        </div>
    `;
}

// AUXILIARES
function criarCard(item, funcaoClique) {
    return `
        <div class="card" onclick="${funcaoClique}('${item.id || ""}', '${item.nome}')">
            <img src="${item.foto}" alt="${item.nome}" onerror="this.src='https://placehold.co'">
            <h3>${item.nome}</h3>
        </div>`;
}

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = (sidebar.style.width === "250px") ? "0" : "250px";
}

document.addEventListener('DOMContentLoaded', mostrarHome);
