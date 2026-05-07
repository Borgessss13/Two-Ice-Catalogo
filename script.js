const listaDiv = document.getElementById('lista');

async function carregarDados() {
    try {
        // Vai buscar o ficheiro que o robô criou
        const response = await fetch('dados.json');
        const camisolas = await response.json();

        if (camisolas.length === 0) {
            listaDiv.innerHTML = "<p>O catálogo está vazio. O robô ainda está a processar...</p>";
            return;
        }

        listaDiv.innerHTML = '';
        camisolas.forEach((item) => {
            // Cria o card com a foto que está na pasta 'camisolas'
            let card = `
                <div class="card">
                    <img src="${item.foto}" alt="${item.nome}" style="width:100%; border-radius:8px;">
                    <h3 style="font-size: 14px; margin-top: 10px;">${item.nome}</h3>
                    <button onclick="encomendar('${item.nome}')" style="background:#25d366; color:white; border:none; padding:10px; width:100%; border-radius:5px; margin-top:10px; cursor:pointer;">
                        Encomendar via WhatsApp
                    </button>
                </div>`;
            listaDiv.innerHTML += card;
        });
    } catch (error) {
        console.error(error);
        listaDiv.innerHTML = "<p>Erro ao carregar fotos. Tente novamente mais tarde.</p>";
    }
}

function encomendar(nome) {
    const texto = encodeURIComponent(`Olá! Tenho interesse na camisola: ${nome}`);
    window.open(`https://wa.me{texto}`, '_blank');
}

carregarDados();
