const listaDiv = document.getElementById('lista');

// 1. BASE DE DADOS COMPLETA
const baseDeDados = {
    "portugal": [
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
        { nome: "Portugal Home 24/25", foto: "camisolas/24_25_pt_home.jpg" },
        { nome: "Portugal Away 24/25", foto: "camisolas/24_25_pt_away.jpg" },
        { nome: "Portugal Treino Black 24/25", foto: "camisolas/24_25_pt_black_train.jpg" },
        { nome: "Portugal Especial Red 24", foto: "camisolas/pt_speciaç_red24.jpg" },
        { nome: "Portugal Home 24 (v2)", foto: "camisolas/pthome24.jpeg" },
        { nome: "Portugal Home 2022", foto: "camisolas/pthome22.jpg" },
        { nome: "Portugal Away 2022", foto: "camisolas/ptaway22.jpg" },
        { nome: "Portugal Concept Black 22", foto: "camisolas/ptconceptblack22.jpg" },
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
        { nome: "Brasil Home 2026", foto: "camisolas/brhome26.jpg" },
        { nome: "Brasil Away 2026", foto: "camisolas/braway26.jpg" },
        { nome: "Brasil World Cup 2026", foto: "camisolas/brwc26.jpg" },
        { nome: "Brasil Home 2024", foto: "camisolas/brhome24.jpg" },
        { nome: "Brasil Treino", foto: "camisolas/brtrain.jpg" },
        { nome: "Brasil Polo", foto: "camisolas/brpolo.jpg" },
        { nome: "Brasil Jesus Rosa", foto: "camisolas/brjesus26.jpg" },
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
        { nome: "Brasil World Cup 2022", foto: "camisolas/brwc22.jpg" },
        { nome: "Brasil Black 2022", foto: "camisolas/brblack22.jpg" },
        { nome: "Brasil Blue 2022", foto: "camisolas/brblue22.jpg" },
        { nome: "Brasil White 2022", foto: "camisolas/brwhite22.jpg" },
        { nome: "Brasil Yellow 2022", foto: "camisolas/bryellow22.jpg" },
        { nome: "Brasil Train Light 22", foto: "camisolas/brtrainlight22.jpg" },
        { nome: "Brasil Special 22", foto: "camisolas/brspecial22.jpg" },
        { nome: "Brasil Special 22 (1)", foto: "camisolas/brspecial22(1).jpg" },
        { nome: "Brasil Special 22 (2)", foto: "camisolas/brspecial22(2).jpg" },
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
        { nome: "SCP 24/25", foto: "camisolas/scp2425.jpg" },
        { nome: "SCP Apricot Train Fan 25/26", foto: "camisolas/scpapricottrainfan2526.jpeg" },
        { nome: "SCP Away 21/22", foto: "camisolas/scpaway2122.jpg" },
        { nome: "SCP Away 22/23", foto: "camisolas/scpaway2223.jpg" },
        { nome: "SCP Away 23/24", foto: "camisolas/scpaway2324.jpg" },
        { nome: "SCP Away 24/25", foto: "camisolas/scpaway2425.jpg" },
        { nome: "SCP Away 25/26", foto: "camisolas/scpaway2526.jpg" },
        { nome: "SCP Away 2 21/22", foto: "camisolas/scpaway22122.jpg" },
        { nome: "SCP Champ 23/24", foto: "camisolas/scpchamp2324.png" },
        { nome: "SCP Commemorative Edit 24/25", foto: "camisolas/scpcommemorativeedit2425.jpg" },
        { nome: "SCP Fan 25/26", foto: "camisolas/scpfan2526.jpeg" },
        { nome: "SCP Goal Blue 25/26", foto: "camisolas/scpgoalblue2526.jpg" },
        { nome: "SCP Home 22/23", foto: "camisolas/scphome2223.jpg" },
        { nome: "SCP Home 23/24", foto: "camisolas/scphome2324.jpg" },
        { nome: "SCP Home 25/26", foto: "camisolas/scphome2526.jpg" },
        { nome: "SCP Pink October 24/25", foto: "camisolas/scppinkoctober2425.jpg" },
        { nome: "SCP Player Away 23/24", foto: "camisolas/scpplayeraway2324.jpg" },
        { nome: "SCP Player Away 24/25", foto: "camisolas/scpplayeraway2425.png" },
        { nome: "SCP Player Home 23/24", foto: "camisolas/scpplayerhome2324.jpg" },
        { nome: "SCP Player Home 25/26", foto: "camisolas/scpplayerhome2526.jpg" },
        { nome: "SCP Pre-Match 24/25", foto: "camisolas/scpprematch2425.jpg" },
        { nome: "SCP Pre-Match 26/27", foto: "camisolas/scpprematch2627.jpg" },
        { nome: "SCP Retro 94/95", foto: "camisolas/scpretro9495.jpg" },
        { nome: "SCP Retro Home 01/02", foto: "camisolas/scpretrohome0103.jpg" },
        { nome: "SCP Spec Edit 25/26", foto: "camisolas/scpspecedit2526.jpeg" },
        { nome: "SCP Spec Edit 22 25/26", foto: "camisolas/scpspecedit22526.jpeg" },
        { nome: "SCP Stromp 24/25", foto: "camisolas/scpstromp2425.jpg" },
        { nome: "SCP Total 90 Black", foto: "camisolas/scptotal90black.jpg" },
        { nome: "SCP Train 25/26", foto: "camisolas/scptrain2526.jpeg" },
        { nome: "SCP Train 22 25/26", foto: "camisolas/scptrain22526.jpeg" },
        { nome: "SCP Train Fan Black 25/26", foto: "camisolas/scptrainfanblack2526.jpeg" }
    ],
        "porto": [
        { nome: "FCP 25/26", foto: "camisolas/fcp2526.jpg" },
        { nome: "FCP Training 25/26", foto: "camisolas/fcp22526.jpg" },
        { nome: "FCP Away 22/23", foto: "camisolas/fcpaway2223.jpg" },
        { nome: "FCP Away 23/24", foto: "camisolas/fcpaway2324.jpg" },
        { nome: "FCP Away 24/25", foto: "camisolas/fcpaway2425.jpg" },
        { nome: "FCP Away 25/26", foto: "camisolas/fcpaway2526.jpg" },
        { nome: "FCP Away (v2) 23/24", foto: "camisolas/fcpaway22324.jpg" },
        { nome: "FCP Away (v2) 24/25", foto: "camisolas/fcpaway22425.jpg" },
        { nome: "FCP Home 22/23", foto: "camisolas/fcphome2223.jpg" },
        { nome: "FCP Home 23/24", foto: "camisolas/fcphome2324.jpg" },
        { nome: "FCP Home 24/25", foto: "camisolas/fcphome2425.jpg" },
        { nome: "FCP Home 25/26", foto: "camisolas/fcphome2526.jpg" },
        { nome: "FCP Home (v2) 25/26", foto: "camisolas/fcphome22526.jpg" },
        { nome: "FCP Retro 17/18", foto: "camisolas/fcphomeretro1718.jpg" },
        { nome: "FCP Retro 86/87", foto: "camisolas/fcphomeretro8687.jpg" },
        { nome: "FCP Special 26/27", foto: "camisolas/fcpspec2627.jpg" },
        { nome: "FCP Special Edit 25/26", foto: "camisolas/fcpspecedit2526.jpg" },
        { nome: "FCP Special Edit (v2) 25/26", foto: "camisolas/fcpspecedit22526.jpg" },
        { nome: "FCP Special Edit Red 25/26", foto: "camisolas/fcpspeceditred2526.jpeg" }
    ],
    "benfica": [
        { nome: "SLB 23/24", foto: "camisolas/slb2324.jpg" },
        { nome: "SLB Adidas Retro 25/26", foto: "camisolas/slbadidasretro2526.jpg" },
        { nome: "SLB Away 21/22", foto: "camisolas/slbaway2122.jpg" },
        { nome: "SLB Away 23/24", foto: "camisolas/slbaway2324.jpg" },
        { nome: "SLB Away 24/25", foto: "camisolas/slbaway2425.jpg" },
        { nome: "SLB Away 25/26", foto: "camisolas/slbaway2526.jpg" },
        { nome: "SLB Away (v2) 24/25", foto: "camisolas/slbaway22425.jpg" },
        { nome: "SLB Away (v3) 25/26", foto: "camisolas/slbaway22526.jpg" },
        { nome: "SLB Away Retro 04/05", foto: "camisolas/slbawayretro0405.jpg" },
        { nome: "SLB Away Retro 98/99", foto: "camisolas/slbawayretro9899.jpg" },
        { nome: "SLB Away White 21/22", foto: "camisolas/slbawaywhite2122.jpg" },
        { nome: "SLB Commemorative Edit 23/24", foto: "camisolas/slbcommemorativeedit2324.jpg" },
        { nome: "SLB Concept 25/26", foto: "camisolas/slbconcept22526.jpg" },
        { nome: "SLB Concept Away 24/25", foto: "camisolas/slbconceptaway2425.jpg" },
        { nome: "SLB Concept White 25/26", foto: "camisolas/slbconceptwhite2526.jpg" },
        { nome: "SLB Goal 25/26", foto: "camisolas/slbgoal2526.jpg" },
        { nome: "SLB Goal Black/Grey 26/27", foto: "camisolas/slbgoalblackgrey2627.jpg" },
        { nome: "SLB Home 21/22", foto: "camisolas/slbhome2122.jpg" },
        { nome: "SLB Home 22/23", foto: "camisolas/slbhome2223.jpg" },
        { nome: "SLB Home 23/24", foto: "camisolas/slbhome2324.jpg" },
        { nome: "SLB Home 24/25", foto: "camisolas/slbhome2425.jpg" },
        { nome: "SLB Home 22/23/24", foto: "camisolas/slbhome22324.jpg" },
        { nome: "SLB Home Retro 02/03", foto: "camisolas/slbhomeretro0203.jpg" },
        { nome: "SLB Player 23/24", foto: "camisolas/slbplayer2324.jpg" },
        { nome: "SLB Player 25/26", foto: "camisolas/slbplayer2526.jpg" },
        { nome: "SLB Player Home 23/24", foto: "camisolas/slbplayerhome2324.jpg" },
        { nome: "SLB Player Home 24/25", foto: "camisolas/slbplayerhome2425.jpg" },
        { nome: "SLB Player Home 25/26", foto: "camisolas/slbplayerhome2526.jpg" },
        { nome: "SLB Pre-Match 24/25", foto: "camisolas/slbprematch2425.jpg" },
        { nome: "SLB Pre-Match Train 25/26", foto: "camisolas/slbprematchtrain2526.jpg" },
        { nome: "SLB Retro 04/05", foto: "camisolas/slbretro0405.jpg" },
        { nome: "SLB Retro Away 04/05", foto: "camisolas/slbretroaway0405.jpg" },
        { nome: "SLB Retro Away 09/10", foto: "camisolas/slbretroaway0910.jpg" },
        { nome: "SLB Retro Away 13/14", foto: "camisolas/slbretroaway1314.jpg" },
        { nome: "SLB Retro Away 97/99", foto: "camisolas/slbretroaway9799.jpg" },
        { nome: "SLB Retro Home 94/95", foto: "camisolas/slbretrohome9495.jpg" },
        { nome: "SLB Retro Home 98/99", foto: "camisolas/slbretrohome9899.jpg" },
        { nome: "SLB Spec 25/26", foto: "camisolas/slbspec2526.jpg" },
        { nome: "SLB Spec Eagle Black/Red 26/27", foto: "camisolas/slbspeceagleblackred2627.jpg" },
        { nome: "SLB Spec Eagle Black/White 26/27", foto: "camisolas/slbspeceagleblackwhite2627.jpg" },
        { nome: "SLB Spec Edit 25/26", foto: "camisolas/slbspecedit2526.jpg" },
        { nome: "SLB Spec Edit (v2) 25/26", foto: "camisolas/slbspecedit22526.jpg" },
        { nome: "SLB Spec Edit (v3) 25/26", foto: "camisolas/slbspecedit32526.jpg" },
        { nome: "SLB Training Goal 25/26", foto: "camisolas/slbtraingoal2526.jpg" }
    ],

    "liga_pt": [
        { id: "sporting", nome: "Sporting CP", foto: "fotos/sporting.png" },
        { id: "porto", nome: "FC Porto", foto: "fotos/porto.jpg" },
        { id: "benfica", nome: "SL Benfica", foto: "fotos/benfica.png" }
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

// 3. FUNÇÕES AUXILIARES PARA CRIAR ELEMENTOS (DOM seguro, sem innerHTML)
function criarTitulo(texto, classeH2) {
    const container = document.createElement('div');
    container.className = 'titulo-container';
    const h2 = document.createElement('h2');
    if (classeH2) h2.className = classeH2;
    h2.textContent = texto;
    container.appendChild(h2);
    return container;
}

function criarGrid(cards) {
    const grid = document.createElement('div');
    grid.className = 'sub-grid';
    cards.forEach(card => grid.appendChild(card));
    return grid;
}

function criarCard(item, funcao) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = item.foto;
    img.alt = item.nome;

    const h3 = document.createElement('h3');
    h3.textContent = item.nome;

    card.append(img, h3);
    card.addEventListener('click', () => funcao(item.id, item.nome));
    return card;
}

function criarProdutoCard(camisola) {
    const card = document.createElement('div');
    card.className = 'produto-card';

    const img = document.createElement('img');
    img.src = camisola.foto;
    img.alt = camisola.nome;

    const h3 = document.createElement('h3');
    h3.textContent = camisola.nome;

    const btn = document.createElement('button');
    btn.className = 'btn-main';
    btn.textContent = 'Encomendar';

    card.append(img, h3, btn);
    return card;
}

// 4. FUNÇÃO HOME
function mostrarHome() {
    const btnRetro = document.getElementById('btn-retroceder');
    if (btnRetro) btnRetro.style.display = 'none';

    listaDiv.innerHTML = '';
    listaDiv.append(
        criarTitulo('Seleções', 'section-title'),
        criarGrid(menus.selecoes.map(item => criarCard(item, verSubCategoria))),
        criarTitulo('Ligas', 'section-title'),
        criarGrid(menus.ligas.map(item => criarCard(item, verSubCategoria)))
    );
}

// 5. FUNÇÃO PARA VER CATEGORIAS/CAMISOLAS
function verSubCategoria(id, nome) {
    const btnRetro = document.getElementById('btn-retroceder');
    if (btnRetro) btnRetro.style.display = 'block';

    const itens = baseDeDados[id];

    listaDiv.innerHTML = '';

    if (!itens) {
        const aviso = document.createElement('p');
        aviso.textContent = 'Em breve...';
        listaDiv.appendChild(aviso);
        return;
    }

    // Se clicou em Liga PT, mostra os clubes. Se clicou num clube/seleção, mostra as camisolas.
    listaDiv.appendChild(criarTitulo(nome));
    if (id === "liga_pt") {
        listaDiv.appendChild(criarGrid(itens.map(item => criarCard(item, verSubCategoria))));
    } else {
        listaDiv.appendChild(criarGrid(itens.map(criarProdutoCard)));
    }
}

// Inicializar
window.onload = mostrarHome;
