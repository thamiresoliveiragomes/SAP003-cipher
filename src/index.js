document.getElementById("codificar").addEventListener("click", codificar);
document.getElementById("descodificar").addEventListener("click", descodificar);
document.getElementById("limpar").addEventListener("click", limpar);

function codificar(event) {
  event.preventDefault();
  let offset = Number(document.getElementById("offset").value);
  let string = document.getElementById("mensagem").value;
  if (string === "") {
    alert("Preencha a mensagem a ser codificada");
  } else if (offset === 0 || !Number.isInteger(offset)) {
    alert("Digite uma chave de deslocamento válida");
  } else if (offset < 0) {
    offset = Math.abs(offset);
    let result = window.cipher.decode(offset, string);
    document.getElementById("resposta").innerHTML = `<p>A mensagem codificada é: <p>${result}</p></p>`;
  } else {
    let result = window.cipher.encode(offset, string);
    document.getElementById("resposta").innerHTML = `<p>A mensagem codificada é: <p>${result}</p></p>`;
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
    document.getElementById("resposta").innerHTML = `<p>A mensagem descodificada é: <p>${result}</p></p>`;
  } else {
    let result = window.cipher.decode(offset, string);
    document.getElementById("resposta").innerHTML = `<p>A mensagem descodificada é: <p>${result}</p></p>`;
  }
}
function limpar(event) {
  event.preventDefault();
  document.getElementById("resposta").classList.add("invisivel");
  document.getElementById("mensagem").value = "";
  document.getElementById("offset").value = "";
}