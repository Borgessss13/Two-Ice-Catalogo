// Selecionar o container principal
const listaDiv = document.getElementById('lista');

// 1. BASE DE DADOS (Onde guardas os itens de cada Seleção ou Liga)
const baseDeDados = {
    "portugal": [
        { 
            id: "pt_home_26", 
            nome: "Portugal Home 2026", 
            foto: "https://yupoo.com" 
        },
        { 
            id: "pt_away_26", 
            nome: "Portugal Away 2026", 
            foto: "https://yupoo.com" 
        },
        { 
            id: "pt_treino_26", 
            nome: "Portugal Treino 2026", 
            foto: "https://yupoo.com" 
        },
        { 
            id: "pt_retro", 
            nome: "Portugal Edição Especial Retro", 
            foto: "https://yupoo.com" 
        }
    ],
    "liga_pt": [
        { id: "scp", nome: "Sporting", foto: "fotos/sporting.png" },
        { id: "fcp", nome: "FC Porto", foto: "fotos/porto.jpg" },
        { id: "slb", nome: "Benfica", foto: "fotos/benfica.png" }
    ]
    // Podes adicionar "brasil": [ ... ] ou "premier": [ ... ] aqui futuramente
};

// 2. MENUS PRINCIPAIS (O que aparece na Home)
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
        listaDiv.innerHTML += `
            <div style="text-align:center; padding:40px; width:100%;">
                <p>Catálogo de ${nome} brevemente disponível.</p>
                <button class="btn-insta" onclick="window.open('https://instagram.com', '_blank')" style="margin-top:20px;">CONSULTAR NO INSTAGRAM</button>
            </div>`;
        return;
    }

    let gridItens = '<div class="sub-grid">';
    itens.forEach(item => {
        // Agora ao clicar, se for de Portugal, abre logo o Instagram
        if (id === "portugal") {
            gridItens += criarCardComBotao(item);
        } else {
            gridItens += criarCard(item, 'verDetalhesFinal');
        }
    });
    gridItens += '</div>';
    listaDiv.innerHTML += gridItens;

    // Faz scroll automático para o início do catálogo ao entrar
    window.scrollTo(0, document.getElementById("catalogo-section").offsetTop - 50);
}

// 5. FUNÇÃO PARA VER CAMISOLAS DE CLUBES (Com botão Instagram direto)
function verDetalhesFinal(id, nome) {
    listaDiv.innerHTML = `
        <div class="titulo-container"><h2 class="section-title">${nome}</h2></div>
        <div style="text-align:center; padding:40px; width:100%;">
            <p style="margin-bottom:20px; font-size:18px;">Interessado nas camisolas do <strong>${nome}</strong>?</p>
            <button class="btn-insta" onclick="window.open('https://instagram.com', '_blank')">CONSULTAR NO INSTAGRAM</button>
        </div>
    `;
}

// AUXILIAR: Cria cards normais (para menus)
function criarCard(item, funcaoClique) {
    return `
        <div class="card" onclick="${funcaoClique}('${item.id}', '${item.nome}')">
            <img src="${item.foto}" alt="${item.nome}" onerror="this.src='https://placehold.co'">
            <h3>${item.nome}</h3>
        </div>`;
}

// AUXILIAR: Cria cards já com o botão Instagram (para camisolas finais)
function criarCardComBotao(item) {
    return `
        <div class="card" onclick="window.open('https://instagram.com', '_blank')">
            <img src="${item.foto}" alt="${item.nome}" onerror="this.src='https://placehold.co'">
            <h3>${item.nome}</h3>
            <button class="btn-insta">Ver Detalhes</button>
        </div>`;
}

// GATILHO DE INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', mostrarHome);
