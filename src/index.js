document.getElementById("codificar").addEventListener("click", codificar);
document.getElementById("descodificar").addEventListener("click", descodificar);
document.getElementById("limpar").addEventListener("click", limpar);
document.getElementById("fechar").addEventListener("click", fechar);

function codificar(event) {
  event.preventDefault();
  let offset = Number(document.getElementById("offset").value);
  let string = document.getElementById("mensagem").value;
  if (string === "") {
    alert("Digite a mensagem");
  } else if (offset === 0 || !Number.isInteger(offset)) {
    alert("Digite um deslocamento válido");
  } else if (offset < 0) {
    offset = Math.abs(offset);
    let result = window.cipher.decode(offset, string);
    document.getElementById("resposta").classList.remove("invisivel");
    document.getElementById("resultados").innerHTML = `<p>Mensagem codificada: </p><p>${result}</p>`;
  } else {
    let result = window.cipher.encode(offset, string);
    document.getElementById("resposta").classList.remove("invisivel");
    document.getElementById("resultados").innerHTML = `<p>Mensagem codificada: </p><p>${result}</p>`;
  }
}
function descodificar(event) {
  event.preventDefault();
  let offset = Number(document.getElementById("offset").value);
  let string = document.getElementById("mensagem").value;
  if (string === "") { 
    alert("Preencha a mensagem a ser descodificada");
  } else if (offset === 0 || !Number.isInteger(offset)) {
    alert("Digite uma chave de deslocamento válida");
  } else if (offset < 0) {
    offset = Math.abs(offset);
    let result = window.cipher.encode(offset, string);
    document.getElementById("resposta").classList.remove("invisivel");
    document.getElementById("resultados").innerHTML = `<p>Mensagem descodificada: </p><p>${result}</p>`;
  } else {
    let result = window.cipher.decode(offset, string);
    document.getElementById("resposta").classList.remove("invisivel");
    document.getElementById("resultados").innerHTML = `<p>Mensagem descodificada: </p><p>${result}</p>`;
  }
}
function limpar(event) {
  event.preventDefault();
  document.getElementById("mensagem").value = "";
  document.getElementById("offset").value = "";
}
function fechar(event) {
  event.preventDefault();
  document.getElementById("resposta").classList.add("invisivel");
}