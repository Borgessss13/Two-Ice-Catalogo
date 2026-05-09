const listaDiv = document.getElementById('lista');

// 1. BASE DE DADOS (Camisolas que aparecem após clicar no símbolo)
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
    ],
    "premier": [
        { nome: "Manchester City", foto: "fotos/mancity.png" },
        { nome: "Liverpool FC", foto: "fotos/liverpool.png" }
    ]
};

// 2. MENUS DA HOME (Símbolos das Seleções e Ligas)
const menus = {
    selecoes: [
        { id: "portugal", nome: "Portugal", foto: "fotos/portugal.png" },
        { id: "brasil", nome: "Brasil", foto: "fotos/brasil.png" },
        { id: "argentina", nome: "Argentina", foto: "fotos/argentina.png" },
        { id: "franca", nome: "França", foto: "fotos/franca.jpeg" },
        { id: "alemanha", nome: "Alemanha", foto: "fotos/alemanha1.png" },
        { id: "espanha", nome: "Espanha", foto: "fotos/espanha.png" },
        { id: "inglaterra", nome: "Inglaterra", foto: "fotos/inglaterra1.jpg" },
        { id: "italia", nome: "Itália", foto: "fotos/italia.png" }
    ],
    ligas: [
        { id: "liga_pt", nome: "Liga Portugal", foto: "fotos/ligaportugal.png" },
        { id: "premier", nome: "Premier League", foto: "fotos/premierligue.jpg" },
        { id: "laliga", nome: "La Liga", foto: "fotos/laliga.png" },
        { id: "seriea", nome: "Serie A", foto: "fotos/seriea.jpg" },
        { id: "bundesliga", nome: "Bundesliga", foto: "fotos/bundesligue.png" },
        { id: "ligue1", nome: "Ligue 1", foto: "fotos/ligue1.png" },
        { id: "saudi", nome: "Saudi Pro League", foto: "fotos/saudi.png" },
        { id: "brasileirao", nome: "Brasileirão", foto: "fotos/brasileirao1.png" }
    ]
};

// 3. FUNÇÃO HOME (MOSTRAR SÍMBOLOS)
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

// 4. FUNÇÃO QUE ABRE A CATEGORIA CLICADA
function verSubCategoria(id, nome) {
    const btnRetro = document.getElementById('btn-retroceder');
    if (btnRetro) btnRetro.style.display = 'block';
    
    const itens = baseDeDados[id];
    
    if (!itens) {
        listaDiv.innerHTML = `
            <div class="titulo-container"><h2 class="section-title">${nome}</h2></div>
            <p style="text-align:center; padding:40px;">Catálogo brevemente disponível no Instagram.</p>
            <div style="text-align:center;"><button class="btn-insta" onclick="window.open('https://instagram.com')">Ver no Instagram</button></div>
        `;
    } else {
        listaDiv.innerHTML = `
            <div class="titulo-container"><h2 class="section-title">${nome}</h2></div>
            <div class="sub-grid">${itens.map(item => criarCard(item, 'verDetalhesFinal')).join('')}</div>
        `;
    }
    window.scrollTo({ top: document.getElementById("catalogo-section").offsetTop - 50, behavior: 'smooth' });
}

// 5. FUNÇÃO DETALHE FINAL
function verDetalhesFinal(id, nome) {
    listaDiv.innerHTML = `
        <div class="titulo-container"><h2 class="section-title">${nome}</h2></div>
        <div style="text-align:center; padding:60px;">
            <p style="font-size:18px; margin-bottom:20px;">Encomendar <strong>${nome}</strong>?</p>
            <button class="btn-insta" onclick="window.open('https://instagram.com', '_blank')">FALAR NO INSTAGRAM</button>
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
