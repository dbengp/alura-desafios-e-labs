// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Validação: Verifica se o campo está vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Validação: Verifica se o nome já está na lista
    if (listaAmigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    // Adiciona o nome ao array e atualiza a lista na tela
    listaAmigos.push(nomeAmigo);
    inputAmigo.value = ''; // Limpa o campo de entrada
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada nome da lista ao HTML
    listaAmigos.forEach((amigo) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigosElement.appendChild(itemLista);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verifica se há amigos disponíveis
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Mostra o resultado na tela
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}