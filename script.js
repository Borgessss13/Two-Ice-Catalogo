const dados = [
    {
        liga: "Premier League",
        clubes: [
            { nome: "Arsenal", fotos: ["link-da-foto-1.jpg", "link-da-foto-2.jpg"] },
            { nome: "Man City", fotos: ["link-da-foto-3.jpg"] }
        ]
    },
    {
        liga: "Liga Portugal",
        clubes: [
            { nome: "Benfica", fotos: ["foto1.jpg"] }
        ]
    }
];

const listaDiv = document.getElementById('lista');

function mostrarLigas() {
    listaDiv.innerHTML = '';
    dados.forEach((item, index) => {
        let btn = `<div class="card" onclick="mostrarClubes(${index})">${item.liga}</div>`;
        listaDiv.innerHTML += btn;
    });
}

function mostrarClubes(indexLiga) {
    listaDiv.innerHTML = '';
    dados[indexLiga].clubes.forEach((clube, indexClube) => {
        let btn = `<div class="card" onclick="mostrarFotos(${indexLiga}, ${indexClube})">${clube.nome}</div>`;
        listaDiv.innerHTML += btn;
    });
}

function mostrarFotos(indexLiga, indexClube) {
    listaDiv.innerHTML = '';
    const fotos = dados[indexLiga].clubes[indexClube].fotos;
    fotos.forEach(foto => {
        listaDiv.innerHTML += `<img src="${foto}" class="camisola">`;
    });
}

function voltar() { mostrarLigas(); }

mostrarLigas(); // Inicia o site
