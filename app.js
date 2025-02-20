const listaAmigosElement = document.querySelector("#listaAmigos");
const amigoElement = document.querySelector("#amigo");
const resultadoElement = document.querySelector("#resultado");

let amigos = [];

function adicionarAmigo() {
  const amigo = amigoElement.value.trim();

  if (checaSeNomeDigitado(amigo)) {
    alert("Por favor, insira um nome.");
    return;
  }

  const amigoJaNaLista = amigos.find(
    (a) => a.toLowerCase() === amigo.toLowerCase()
  );

  if (amigoJaNaLista) {
    alert("Amigo digitado já está na lista");
    return;
  }

  amigos.push(amigo);
  atualizaListaAmigos();
  amigoElement.value = "";
  amigoElement.focus();
}

function checaSeNomeDigitado(str) {
  return str === "";
}

function atualizaListaAmigos() {
  const amigoLi = document.createElement("li");
  amigos.forEach((amigo) => {
    amigoLi.classList.add("result-list");
    amigoLi.innerHTML = amigo;
  });
  listaAmigosElement.appendChild(amigoLi);
}

function sortearAmigo() {
  if (checaSeListaAmigosVazia()) {
    alert("Não há amigos para a serem soteados");
    return;
  }

  const resultListElement = document.querySelectorAll(".result-list");
  resultListElement.forEach((element) => {
    if (!element.id) element.remove();
  });

  const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  amigos = amigos.filter((amigo) => amigo !== amigoSorteado);

  resultadoElement.innerHTML = amigoSorteado;
}

function checaSeListaAmigosVazia() {
  return amigos.length === 0;
}
