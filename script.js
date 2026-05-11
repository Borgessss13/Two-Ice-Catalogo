const listaDiv = document.getElementById('lista');

// 1. BASE DE DADOS COMPLETA (Portugal e Brasil)
const baseDeDados = {
    "portugal": [
        // Época 2026
        { nome: "Portugal Home 2026", foto: "camisolas/pthome26.jpg" },
        { nome: "Portugal Away 2026", foto: "camisolas/ptaway26.jpg" },
        { nome: "Portugal Pre-Jogo 2026", foto: "camisolas/pt_pre_jogo26.jpg" },
        { nome: "Portugal Treino 2026", foto: "camisolas/pttraining26.jpg" },
        { nome: "Portugal Treino 26 (v2)", foto: "camisolas/pttrain26.png" },
        { nome: "Portugal Treino 26 (v3)", foto: "camisolas/pttrain226.png" },
        { nome: "Portugal Treino Camuflagem", foto: "camisolas/pttraincamo26.jpg" },
        { nome: "Portugal Manga Comprida Away", foto: "camisolas/ptaaymngcomp26.png" },
        { nome: "Portugal Edição Aniversário", foto: "camisolas/pteditaniver26.png" },
        { nome: "Portugal Especial 2026", foto: "camisolas/ptspecial26.jpg" },
        // Época 2024/25
        { nome: "Portugal Home 24/25", foto: "camisolas/24_25_pt_home.jpg" },
        { nome: "Portugal Away 24/25", foto: "camisolas/24_25_pt_away.jpg" },
        { nome: "Portugal Treino Black 24/25", foto: "camisolas/24_25_pt_black_train.jpg" },
        { nome: "Portugal Especial Red 24", foto: "camisolas/pt_speciaç_red24.jpg" },
        { nome: "Portugal Home 24 (v2)", foto: "camisolas/pthome24.jpeg" },
        // Época 2022
        { nome: "Portugal Home 2022", foto: "camisolas/pthome22.jpg" },
        { nome: "Portugal Away 2022", foto: "camisolas/ptaway22.jpg" },
        { nome: "Portugal Concept Black 22", foto: "camisolas/ptconceptblack22.jpg" },
        // Retrô
        { nome: "Portugal Retro 2016", foto: "camisolas/pt_home_retro16.jpg" },
        { nome: "Portugal Retro 2010 (Away)", foto: "camisolas/pt_away_retro010.jpg" },
        { nome: "Portugal Retro 2006", foto: "camisolas/pt_home_retro06.jpg" },
        { nome: "Portugal Retro 2004", foto: "camisolas/pt_home_retro04.jpg" },
        { nome: "Portugal Retro 2002", foto: "camisolas/pt_home_retro02.jpg" },
        { nome: "Portugal Retro 2000", foto: "camisolas/pt_home_retro00.jpg" },
        { nome: "Portugal Retro 1998 (Away)", foto: "camisolas/pt_away_retro98.jpg" },
        { nome: "Portugal Tributo Eusébio", foto: "camisolas/pteusebio.jpg" }
    ],
    "brasil": [
        // Época 2026 e Recentes
        { nome: "Brasil Home 2026", foto: "camisolas/brhome26.jpg" },
        { nome: "Brasil Away 2026", foto: "camisolas/braway26.jpg" },
        { nome: "Brasil World Cup 2026", foto: "camisolas/brwc26.jpg" },
        { nome: "Brasil Home 2024", foto: "camisolas/brhome24.jpg" },
        { nome: "Brasil Treino", foto: "camisolas/brtrain.jpg" },
        { nome: "Brasil Polo", foto: "camisolas/brpolo.jpg" },
        { nome: "Brasil Jesus Rosa", foto: "camisolas/brjesus26.jpg" },
        // Especiais 2025/26
        { nome: "Brasil Special 26", foto: "camisolas/brspecial26.jpg" },
        { nome: "Brasil Special 26 (2)", foto: "camisolas/brspecial26 (2).jpg" },
        { nome: "Brasil Special 26 (3)", foto: "camisolas/brspecial26 (3).jpg" },
        { nome: "Brasil Special 26 (4)", foto: "camisolas/brspecial26 (4).jpg" },
        { nome: "Brasil Special 26 (5)", foto: "camisolas/brspecial26 (5).jpg" },
        { nome: "Brasil Special 26 (6)", foto: "camisolas/brspecial26 (6).jpg" },
        { nome: "Brasil Special 25", foto: "camisolas/brspecial25.jpg" },
        { nome: "Brasil Special 25 (2)", foto: "camisolas/brspecial25 (2).jpg" },
        { nome: "Brasil Special 25 (3)", foto: "camisolas/brspecial25 (3).jpg" },
        { nome: "Brasil Special 24", foto: "camisolas/brspecial24.jpg" },
        { nome: "Brasil Stussy 25", foto: "camisolas/BrStussy25.jpg" },
        // Época 2022
        { nome: "Brasil World Cup 2022", foto: "camisolas/brwc22.jpg" },
        { nome: "Brasil Black 2022", foto: "camisolas/brblack22.jpg" },
        { nome: "Brasil Blue 2022", foto: "camisolas/brblue22.jpg" },
        { nome: "Brasil White 2022", foto: "camisolas/brwhite22.jpg" },
        { nome: "Brasil Yellow 2022", foto: "camisolas/bryellow22.jpg" },
        { nome: "Brasil Train Light 22", foto: "camisolas/brtrainlight22.jpg" },
        { nome: "Brasil Special 22", foto: "camisolas/brspecial22.jpg" },
        { nome: "Brasil Special 22 (1)", foto: "camisolas/brspecial22(1).jpg" },
        { nome: "Brasil Special 22 (2)", foto: "camisolas/brspecial22(2).jpg" },
        // Retrô e Concepts
        { nome: "Brasil Retro 70", foto: "camisolas/brretro70.jpg" },
        { nome: "Brasil Retro 93", foto: "camisolas/brretro93.jpg" },
        { nome: "Brasil Retro 94", foto: "camisolas/brretro94.jpg" },
        { nome: "Brasil Retro 98", foto: "camisolas/brretro98.jpg" },
        { nome: "Brasil Retro 98 (2)", foto: "camisolas/brretro98 (2).jpg" },
        { nome: "Brasil Retro 04", foto: "camisolas/brretro04.jpg" },
        { nome: "Brasil Retro 04 Home", foto: "camisolas/brretro04home.jpg" },
        { nome: "Brasil Retro 06", foto: "camisolas/brretro06.jpg" },
        { nome: "Brasil Retro Soldier", foto: "camisolas/brretro soldier.jpg" },
        { nome: "Brasil Edição Pelé", foto: "camisolas/brpele.jpg" },
        { nome: "Brasil Concept 26", foto: "camisolas/brconcept26.jpg" },
        { nome: "Brasil Concept B 22", foto: "camisolas/brconceptb22.jpg" },
        { nome: "Brasil Concept W 22", foto: "camisolas/brconceptw22.jpg" },
        { nome: "Brasil Concept Y 22", foto: "camisolas/brconcepty22.jpg" },
        { nome: "Brasil Away 18", foto: "camisolas/braway18.jpg" },
        { nome: "Brasil Away 19", foto: "camisolas/braway19.jpg" },
        { nome: "Brasil Home 18", foto: "camisolas/brhome18.jpg" }
    ],
     "sporting": [
        { nome: "SCP 24/25", foto: "scp2425.jpeg" },
        { nome: "SCP Apricot Train Fan 25/26", foto: "scpapricottrainfan2526.jpeg" },
        { nome: "SCP Away 21/22", foto: "scpaway2122.jpeg" },
        { nome: "SCP Away 22/23", foto: "scpaway2223.jpeg" },
        { nome: "SCP Away 23/24", foto: "scpaway2324.jpeg" },
        { nome: "SCP Away 24/25", foto: "scpaway2425.jpeg" },
        { nome: "SCP Away 25/26", foto: "scpaway2526.jpeg" },
        { nome: "SCP Away 2 21/22", foto: "scpaway22122.jpeg" },
        { nome: "SCP Champ 23/24", foto: "scpchamp2324.jpeg" },
        { nome: "SCP Commemorative Edit 24/25", foto: "scpcommemorativeedit2425.jpeg" },
        { nome: "SCP Fan 25/26", foto: "scpfan2526.jpeg" },
        { nome: "SCP Goal Blue 25/26", foto: "scpgoalblue2526.jpeg" },
        { nome: "SCP Home 22/23", foto: "scphome2223.jpeg" },
        { nome: "SCP Home 23/24", foto: "scphome2324.jpeg" },
        { nome: "SCP Home 25/26", foto: "scphome2526.jpeg" },
        { nome: "SCP Pink October 24/25", foto: "scppinkoctober2425.jpeg" },
        { nome: "SCP Player Away 23/24", foto: "scpplayeraway2324.jpeg" },
        { nome: "SCP Player Away 24/25", foto: "scpplayeraway2425.jpeg" },
        { nome: "SCP Player Home 23/24", foto: "scpplayerhome2324.jpeg" },
        { nome: "SCP Player Home 25/26", foto: "scpplayerhome2526.jpeg" },
        { nome: "SCP Pre-Match 24/25", foto: "scpprematch2425.jpeg" },
        { nome: "SCP Pre-Match 26/27", foto: "scpprematch2627.jpeg" },
        { nome: "SCP Retro 94/95", foto: "scpretro9495.jpeg" },
        { nome: "SCP Retro Home 01/02", foto: "scpretrohome0102.jpeg" },
        { nome: "SCP Spec Edit 25/26", foto: "scpspecedit2526.jpeg" },
        { nome: "SCP Spec Edit 22 25/26", foto: "scpspecedit22526.jpeg" },
        { nome: "SCP Stromp 24/25", foto: "scpstromp2425.jpeg" },
        { nome: "SCP Total 90 Black", foto: "scptotal90black.jpeg" },
        { nome: "SCP Train 25/26", foto: "scptrain2526.jpeg" },
        { nome: "SCP Train 22 25/26", foto: "scptrain22526.jpeg" },
        { nome: "SCP Train Fan Black 25/26", foto: "scptrainfanblack2526.jpeg" }
    ],
    "liga_pt": [
        { nome: "Sporting CP", foto: "fotos/sporting.png" },
        { nome: "FC Porto", foto: "fotos/porto.jpg" },
        { nome: "SL Benfica", foto: "fotos/benfica.png" }
        ]
    },
 

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
