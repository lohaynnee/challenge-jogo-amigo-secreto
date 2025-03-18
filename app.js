//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = JSON.parse(localStorage.getItem('amigos')) || [];
const listaElement = document.getElementById('listaAmigos');
const resultadoElement = document.getElementById('resultado');

function salvarLista() {
    localStorage.setItem('amigos', JSON.stringify(listaAmigos));
}

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    if (nome !== "" && !listaAmigos.includes(nome)) {
        listaAmigos.push(nome);
        salvarLista();
        atualizarLista();
        input.value = "";
    }
}

function atualizarLista() {
    listaElement.innerHTML = "";
    listaAmigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length > 1) {
        let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        resultadoElement.innerHTML = `<div class="sorteio-box">Amigo Secreto: <strong>${sorteado}</strong></div>`;
    } else {
        alert("Adicione pelo menos dois nomes para realizar o sorteio!");
    }
}

document.addEventListener("DOMContentLoaded", atualizarLista);