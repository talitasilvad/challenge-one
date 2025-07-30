let listaDeNomesSorteados = [];
let amigos = [];

function adicionarAmigo() {
    let campo = document.getElementById("amigo");
    let nome = campo.value;

    if(nome === ""){
        alert("Por favor, insira um nome");
    } else{
        amigos.push(nome);
        limparCampo();
        listaDeAmigos();
    } 
}

function listaDeAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }

}

function gerarIndiceAleatorio() {
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    if (listaDeNomesSorteados.includes(indiceSorteado)) {
        return gerarIndiceAleatorio();
    } else{
        listaDeNomesSorteados.push(indiceSorteado);
        return indiceSorteado;
    }
}

function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Por favor, insira 3 ou mais nomes para o sorteio acontecer.");
        return;
    }
    if (listaDeNomesSorteados.length == amigos.length) {
        alert("Todos os nomes já foram sorteados!")
        return;
    }
    let indiceSorteado = gerarIndiceAleatorio();
    let nomeSorteado = amigos[indiceSorteado];
    let mostrarNomeSorteado = document.getElementById("resultado");
    mostrarNomeSorteado.innerHTML += `<li>O nome sorteado foi: <strong>${nomeSorteado}</strong></li>`;
}

function limparCampo() {
    let campo = document.getElementById("amigo");
    campo.value = "";
}

function novoSorteio() {
    limparCampo();

    amigos = [];
    listaDeNomesSorteados = [];

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}