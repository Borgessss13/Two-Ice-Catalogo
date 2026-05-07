const listaDiv = document.getElementById('lista');
const breadcrumb = document.getElementById('breadcrumb') || document.createElement('div');

// BASE DE DADOS: É aqui que vais adicionar tudo
const dados = [
    {
        liga: "Premier League",
        clubes: [
            { 
                nome: "Arsenal", 
                fotos: [
                    "https://placehold.co", // Substitui pelo link da foto
                    "https://placehold.co"
                ] 
            },
            { 
                nome: "Man City", 
                fotos: ["https://placehold.co"] 
            }
        ]
    },
    {
        liga: "Liga Portugal",
        clubes: [
            { 
                nome: "Benfica", 
                fotos: ["https://placehold.co"] 
            }
        ]
    }
];

function mostrarLigas() {
    listaDiv.innerHTML = '';
    breadcrumb.innerHTML = '<strong>Escolha uma Liga</strong>';
    dados.forEach((item, index) => {
        listaDiv.innerHTML += `
            <div class="card" onclick="mostrarClubes(${index})">
                <h3>${item.liga}</h3>
            </div>`;
    });
}

function mostrarClubes(indexLiga) {
    listaDiv.innerHTML = '';
    breadcrumb.innerHTML = `<button onclick="mostrarLigas()">⬅ Voltar</button> <strong> > ${dados[indexLiga].liga}</strong>`;
    
    dados[indexLiga].clubes.forEach((clube, indexClube) => {
        listaDiv.innerHTML += `
            <div class="card" onclick="mostrarFotos(${indexLiga}, ${indexClube})">
                <h3>${clube.nome}</h3>
            </div>`;
    });
}

function mostrarFotos(indexLiga, indexClube) {
    listaDiv.innerHTML = '';
    const clube = dados[indexLiga].clubes[indexClube];
    breadcrumb.innerHTML = `<button onclick="mostrarClubes(${indexLiga})">⬅ Voltar</button> <strong> > ${clube.nome}</strong>`;
    
    clube.fotos.forEach(foto => {
        listaDiv.innerHTML += `
            <div class="card">
                <img src="${foto}" style="width:100%; border-radius:5px;">
                <p>Camisola Oficial</p>
                <button onclick="window.open('https://wa.me', '_blank')" style="background:#25d366; color:white; border:none; width:100%; padding:10px; border-radius:5px;">Encomendar</button>
            </div>`;
    });
}

// Iniciar o site
mostrarLigas();
