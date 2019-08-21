function queroCodificar(event){
    event.preventDefault();
    document.getElementById("inicio").classList.add("invisivel");
    document.getElementById("queroCodificar").classList.remove("invisivel");
}
function queroDescodificar(event){
    event.preventDefault();
    document.getElementById("inicio").classList.add("invisivel");
    document.getElementById("queroDescodificar").classList.remove("invisivel")
}
function voltar1(event){
    event.preventDefault();
    document.getElementById("inicio").classList.remove("invisivel");
    document.getElementById("queroCodificar").classList.add("invisivel");
}
function voltar2(event){
    event.preventDefault();
    document.getElementById("inicio").classList.remove("invisivel");
    document.getElementById("queroDescodificar").classList.add("invisivel");
}
function limpar1(event){
    event.preventDefault();
    document.getElementById("resultCodificar").classList.add("invisivel");
    document.getElementById("mensagemCodificar").value = '';
    document.getElementById("offset1").value = '';
}
function limpar2(event){
    event.preventDefault();
    document.getElementById("resultDescodificar").classList.add("invisivel");
    document.getElementById("mensagemDescodificar").value = '';
    document.getElementById("offset2").value = '';
}
function codificar(event){
    event.preventDefault();
    let offset = Number(document.getElementById("offset1").value);
    let string = document.getElementById("mensagemCodificar").value;
    if(string === ''){
        alert("Preencha a mensagem a ser codificada");
    }else if(offset <= 0){
        alert("Preencha a chave de deslocamento com um número positivo");
    }else{
        let result = window.cipher.encode(offset, string);
        document.getElementById("resultCodificar").classList.remove("invisivel");
        document.getElementById("resultCodificar").innerHTML = `<p>A mensagem codificada é: <p>${result}</p></p>`;
    }
}
function descodificar(event){
    event.preventDefault();
    let offset = Number(document.getElementById("offset2").value);
    let string = document.getElementById("mensagemDescodificar").value;
    if(string === ''){
        alert("Preencha a mensagem a ser descodificada");
    }else if(offset <= 0){
        alert("Preencha a chave de deslocamento com um número positivo");
    }else{
        let result = window.cipher.decode(offset, string);
        document.getElementById("resultDescodificar").classList.remove("invisivel");
        document.getElementById("resultDescodificar").innerHTML = `<p>A mensagem descodificada é: <p>${result}</p></p>`;
    }
}
