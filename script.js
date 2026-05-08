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
        // --- ÉPOCA 2026 ---
        { id: "pt_home26", nome: "Portugal Principal 2026", foto: "camisolas/pthome26.jpg" },
        { id: "pt_away26", nome: "Portugal Away 2026", foto: "camisolas/ptaway26.jpg" },
        { id: "pt_treino26", nome: "Portugal Treino 2026", foto: "camisolas/pttrain26.png" },
        { id: "pt_treino_camoflagem26", nome: "Portugal Treino Camuflagem 2026", foto: "camisolas/pttraincamo26.jpg" },
        { id: "pt_away_mng_compr26", nome: "Portugal Away Manga Comprida 2026", foto: "camisolas/ptaaymngcomp26.png" },
        { id: "pt_edit_aniver26", nome: "Portugal Edição Aniversário 2026", foto: "camisolas/pteditaniver26.png" },
        { id: "pt_treino_sec26", nome: "Portugal Treino Secundária 2026", foto: "camisolas/pttrain226.png" },
        { id: "pt_special26", nome: "Portugal Edição Especial 2026", foto: "camisolas/ptspecial26.jpg" },
        { id: "pt_wind26", nome: "Portugal Windbreaker 2026", foto: "camisolas/Portugal_2026_Windbreaker.jpg" },
        { id: "pt_prematch26", nome: "Portugal Pre-match 2026", foto: "camisolas/Portugal_2026_Pre-match_Player.jpg" },

        // --- ÉPOCA 2024 / 2025 ---
        { id: "pthome24", nome: "Portugal Home 24/25", foto: "camisolas/24_25_Player_Portugal_Home.jpg" },
        { id: "ptaway24", nome: "Portugal Away 24/25", foto: "camisolas/24_25_Player_Portugal_Away.jpg" },
        { id: "ptblack24", nome: "Portugal Black Training 24", foto: "camisolas/24_25_Portugal_Black_training.jpg" },
        { id: "ptspecial24", nome: "Portugal Special Edition Red 24", foto: "camisolas/Portugal_2024_25_Special_Edition_Red.jpg" },

        // --- RETRO E EDIÇÕES ESPECIAIS ---
        { id: "ptretro04", nome: "Portugal Retro 2004", foto: "camisolas/Retro_Portugal_2004_home.jpg" },
        { id: "ptretro98", nome: "Portugal Retro 1998 Away", foto: "camisolas/Retro_1998_Portugal_away.jpg" },
        { id: "ptretro10", nome: "Portugal Retro 2010 Away", foto: "camisolas/Retro_Portugal_2010_Away.jpg" },
        { id: "ptretro01", nome: "Sporting Retro 01/03 (Ronaldo)", foto: "camisolas/Retro_01-03_Sporting_Lisbon_Portugal.jpg" },
        { id: "ptspecial_eusebio", nome: "Portugal Tribute to Eusébio", foto: "camisolas/Portugal_Tribute_to_Eusebio_Special.jpg" },
        { id: "ptblack_special", nome: "Portugal Black Special Edition", foto: "camisolas/23_24_Portugal_Black_Special_Edition.jpg" }
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

// 3. FUNÇÕES DE NAVEGAÇÃO
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

// 4. AUXILIARES
function criarCard(item, funcaoClique) {
    // Se o item não tiver um nome bonito, usa o ID
    let nomeExibicao = item.nome ? item.nome : limparNome(item.id);

    return `
        <div class="card" onclick="${funcaoClique}('${item.id}', '${nomeExibicao.replace(/'/g, "\\'")}')">
            <img src="${item.foto}" alt="${nomeExibicao}" onerror="this.src='https://placehold.co'">
            <h3>${nomeExibicao}</h3>
        </div>`;
}

function limparNome(nomeSujo) {
    return nomeSujo
        .replace(/S-XXL|S-4XL|5-4XL|S-XXXL|S-3XL|SIZE S-XXL|Size S-XXL/gi, "")
        .replace(/FIFA World Cup|player version|2025_26|2024_25/gi, "")
        .replace(/_/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

// 5. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', mostrarHome);
