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
        // --- ANO 2026 (Mundial) ---
        { id: "pt_home26", nome: "Portugal Home 2026", foto: "camisolas/pthome26.jpg" },
        { id: "pt_away26", nome: "Portugal Away 2026", foto: "camisolas/ptaway26.jpg" },
        { id: "pt_prematch26", nome: "Portugal Pre-Match 2026", foto: "camisolas/pt_pre_jogo26.jpg" },
        { id: "pt_training26", nome: "Portugal Training Shirt 2026", foto: "camisolas/pttraing26.jpg" },

        // --- ANO 2024 / 2025 ---
        { id: "pt_home24", nome: "Portugal Home 24/25", foto: "camisolas/24_25_pt_home.jpg" },
        { id: "pt_away24", nome: "Portugal Away 24/25", foto: "camisolas/24_25_pt_away.jpg" },
        { id: "pt_black_train24", nome: "Portugal Black Training 24", foto: "camisolas/24_25_pt_black_train.jpg" },
        { id: "pt_special_red24", nome: "Portugal Special Edition Red 24", foto: "camisolas/pt_speciaç_red24.jpg" },

        // --- ANO 2022 / 2023 ---
        { id: "pt_home22", nome: "Portugal Home 2022", foto: "camisolas/pthome22.jpg" },
        { id: "pt_away22", nome: "Portugal Away 2022", foto: "camisolas/ptaway22.jpg" },
        { id: "pt_concept_black22", nome: "Portugal Concept Black 2022", foto: "camisolas/ptconceptblack22.jpg" },

        // --- RETRO (CLÁSSICAS) ---
        { id: "pt_retro16", nome: "Portugal Retro 2016", foto: "camisolas/pt_home_retro16.jpg" },
        { id: "pt_retro10", nome: "Portugal Retro 2010", foto: "camisolas/pt_away_retro010.jpg" },
        { id: "pt_retro04", nome: "Portugal Retro 2004", foto: "camisolas/pt_home_retro04.jpg" },
        { id: "pt_retro02", nome: "Portugal Retro 2002", foto: "camisolas/pt_home_retro02.jpg" },
        { id: "pt_retro00", nome: "Portugal Retro 2000", foto: "camisolas/pt_home_retro00.jpg" },
        { id: "pt_retro98", nome: "Portugal Retro 1998", foto: "camisolas/pt_away_retro98.jpg" },
        { id: "pt_eusebio", nome: "Portugal Tribute to Eusébio", foto: "camisolas/pteusebio.jpg" }
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
