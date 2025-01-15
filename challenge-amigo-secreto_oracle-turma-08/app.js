// Array para armazenar os amigos
let amigos = []

// Função par adicionar amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nomeAmigo = input.ariaValueMax.trim(); // Remove os espaços extras (ou indesejados)

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