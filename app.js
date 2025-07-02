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

// Reconhecer Enter no teclado para adicionar amigos
document.getElementById("amigo").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
})

// Função para remover amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
    
    // Limpa o resultado se houver
    document.getElementById("resultado").innerHTML = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpa a lista atual
    listaAmigos.innerHTML = "";

    // Cria um <li> para cada amigo no array
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${index + 1}. ${amigo}</span>
            <button class="button-delete" onclick="removerAmigo(${index})" aria-label="Remover ${amigo}">
                ×
            </button>
        `;
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
    li.className = "amigo-sorteado";
    li.innerHTML = `<span>Amigo sorteado 🎉</span><br><strong>${amigoSorteado}</strong> 🎁`;
    resultado.appendChild(li);
}

// Função para reiniciar o sorteio
function reiniciarSorteio() {
    amigos = [];
    atualizarListaAmigos();
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
}
