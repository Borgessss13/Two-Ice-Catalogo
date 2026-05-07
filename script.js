const listaDiv = document.getElementById('lista');

// 1. DADOS DAS CATEGORIAS (Seleções e Ligas)
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
        { id: "brasileirao", nome: "Brasileirão", foto: "fotos/brasileirao.jpg" },
        { id: "saudi", nome: "Saudi Pro League", foto: "fotos/saudi.png" }
    ]
};

// 2. FUNÇÃO PARA CRIAR OS CARDS
function criarCardCategoria(item) {
    return `
        <div class="card" onclick="verCamisolas('${item.id}', '${item.nome}')">
            <img src="${item.foto}" alt="${item.nome}" onerror="this.src='https://placehold.co'">
            <h3>${item.nome}</h3>
        </div>`;
}

// 3. FUNÇÃO PARA MOSTRAR A HOME
function mostrarHome() {
    const btnRetro = document.getElementById('btn-retroceder');
    if (btnRetro) btnRetro.style.display = 'none';
    
    listaDiv.innerHTML = '';

    // Bloco Seleções
    let htmlSelecoes = `<div class="titulo-container"><h2 class="section-title">Seleções</h2></div>
                        <div class="sub-grid">`;
    menus.selecoes.forEach(item => {
        htmlSelecoes += criarCardCategoria(item);
    });
    htmlSelecoes += '</div>';
    listaDiv.innerHTML += htmlSelecoes;

    // Bloco Ligas
    let htmlLigas = `<div class="titulo-container"><h2 class="section-title">Ligas</h2></div>
                     <div class="sub-grid">`;
    menus.ligas.forEach(item => {
        htmlLigas += criarCardCategoria(item);
    });
    htmlLigas += '</div>';
    listaDiv.innerHTML += htmlLigas;
}

// 4. FUNÇÃO PARA VER CAMISOLAS (Interior da Liga/Seleção)
function verCamisolas(id, nome) {
    const btnRetro = document.getElementById('btn-retroceder');
    if (btnRetro) btnRetro.style.display = 'block';
    
    listaDiv.innerHTML = `
        <div class="titulo-container"><h2 class="section-title">${nome}</h2></div>
        <p style="text-align:center; padding:20px;">A carregar camisolas de ${nome}...</p>
    `;
    
    // Aqui no futuro o robô vai injetar as fotos das camisolas filtrando pelo ID
}

// 5. GATILHO DE INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', function() {
    mostrarHome();
});
