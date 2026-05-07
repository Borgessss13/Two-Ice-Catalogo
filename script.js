const listaDiv = document.getElementById('lista');

async function carregarDados() {
    try {
        const response = await fetch('dados.json');
        let albuns = await response.json();

        // Se o robô falhou e o ficheiro está vazio, usamos estes dados base:
        if (albuns.length === 0) {
            albuns = [
                { nome: "Premier League", link: "https://yupoo.com" },
                { nome: "La Liga", link: "https://yupoo.com" },
                { nome: "Liga Portugal", link: "https://yupoo.com" }
            ];
        }

        listaDiv.innerHTML = '';
        albuns.forEach((album) => {
            let card = `
                <div class="card" onclick="window.open('${album.link}', '_blank')">
                    <h3>${album.nome}</h3>
                    <p>Clique para ver camisolas</p>
                </div>`;
            listaDiv.innerHTML += card;
        });
    } catch (error) {
        listaDiv.innerHTML = "<p>Erro ao ligar ao servidor. Tente atualizar a página.</p>";
    }
}

carregarDados();
