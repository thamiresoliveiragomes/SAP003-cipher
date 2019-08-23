document.getElementById("codificar").addEventListener("click", codificar);
document.getElementById("descodificar").addEventListener("click", descodificar);
document.getElementById("limpar").addEventListener("click", limpar);

function codificar(event) {
  event.preventDefault();
  let offset = Number(document.getElementById("offset").value);
  let string = document.getElementById("mensagem").value;
  if (string === "") {
    alert("Preencha a mensagem a ser codificada");
  } else if (offset <= 0 || !Number.isInteger(offset)) {
    alert("Digite uma chave de deslocamento válida");
  } else {
    let result = window.cipher.encode(offset, string);
    document.getElementById("resultCodificar").classList.remove("invisivel");
    document.getElementById("resultDescodificar").classList.add("invisivel");
    document.getElementById("resultCodificar").innerHTML = `<p>A mensagem codificada é: <p>${result}</p></p>`;
  }
}
function descodificar(event) {
  event.preventDefault();
  let offset = Number(document.getElementById("offset").value);
  let string = document.getElementById("mensagem").value;
  if (string === "") {
    alert("Preencha a mensagem a ser descodificada");
  } else if (offset <= 0 || !Number.isInteger(offset)) {
    alert("Digite uma chave de deslocamento válida");
  } else {
    let result = window.cipher.decode(offset, string);
    document.getElementById("resultCodificar").classList.add("invisivel");
    document.getElementById("resultDescodificar").classList.remove("invisivel");
    document.getElementById("resultDescodificar").innerHTML = `<p>A mensagem descodificada é: <p>${result}</p></p>`;
  }
}
function limpar(event) {
  event.preventDefault();
  document.getElementById("resultCodificar").classList.add("invisivel");
  document.getElementById("resultDescodificar").classList.add("invisivel");
  document.getElementById("mensagem").value = "";
  document.getElementById("offset").value = "";
}
