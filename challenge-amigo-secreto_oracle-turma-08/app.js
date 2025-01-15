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
}