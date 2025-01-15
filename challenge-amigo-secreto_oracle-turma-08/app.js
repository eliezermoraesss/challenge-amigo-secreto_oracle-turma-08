// Array para armazenar os amigos
let amigos = [];

// Função par adicionar amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nomeAmigo = input.value.trim(); // Remove os espaços extras (ou indesejados)

    // Validação do campo
    if (!nomeAmigo) {
        alert("Por favor, insira um nome válido!");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nomeAmigo);

    // Atualiza a lista de amigos exibida na tela
    atualizarListaAmigos();

    // Limpa o campo de entrada
    input.value = ""
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpa a lista atual
    listaAmigos.innerHTML = "";

    // Cria um <li> para cada amigo no array
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`; // Adiciona o índice e o nome do amigo
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Limpa o resultado anterior
    resultado.innerHTML = "";

    // Valida se há amigos no array
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
        return;
    }

    // Gera um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Armazenar o nome sorteado
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na tela
    const li = document.createElement("li");
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(li)
}
