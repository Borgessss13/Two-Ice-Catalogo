const listaDiv = document.getElementById('lista');

// 1. DADOS DAS CATEGORIAS
const menus = {
    selecoes: [
        { id: "portugal", nome: "Portugal", foto: "fotos/portugal.png" },
        { id: "brasil", nome: "Brasil", foto: "fotos/brasil.png" }
        { id: "inglaterra", nome: "Inglaterra, foto: "fotos/inglaterra.png" }
    ],
    ligas: [
        { id: "premier", nome: "Premier League", foto: "fotos/premier.png" },
        { id: "liga_pt", nome: "Liga Portugal", foto: "fotos/liga_pt.png" }
    ]
};

// 2. FUNÇÃO PARA CRIAR OS CARDS
function criarCardCategoria(item) {
    return `
        <div class="card" onclick="verCamisolas('${item.id}', '${item.nome}')">
            <img src="${item.foto}" alt="${item.nome}">
            <h3>${item.nome}</h3>
        </div>`;
}

// 3. FUNÇÃO PARA MOSTRAR A HOME
function mostrarHome() {
    // Garante que o botão de retroceder está escondido na home
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

// 4. FUNÇÃO PARA VER CAMISOLAS (Placeholder por enquanto)
function verCamisolas(id, nome) {
    const btnRetro = document.getElementById('btn-retroceder');
    if (btnRetro) btnRetro.style.display = 'block';
    listaDiv.innerHTML = `<h2 class="section-title">${nome}</h2><p style="text-align:center;">Camisolas brevemente...</p>`;
}

// 5. GATILHO DE INICIALIZAÇÃO (O "Start")
document.addEventListener('DOMContentLoaded', function() {
    mostrarHome();
});
