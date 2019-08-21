window.cipher = {
  encode: encode,
  decode: decode
};
function encode(offset, string){
  let arrayResposta = [];
  let tamanho = string.length;
  let array = Array.from(string);
  for(let i=0; i<tamanho; i++){
    let stringToAscii = array[i].charCodeAt(0);
    if(stringToAscii >= 65 && stringToAscii <= 90){
      let calculo = (stringToAscii - 65 + offset) % 26 + 65;
      let result = String.fromCharCode(calculo);
      arrayResposta.push(result);
    }else if(stringToAscii >= 97 && stringToAscii <= 122){
      let calculo = (stringToAscii - 97 + offset) % 26 + 97;
      let result = String.fromCharCode(calculo);
      arrayResposta.push(result);
    }else{
      arrayResposta.push(array[i]);
    }
  }
  return arrayResposta.join("");
}
function decode(offset, string) {
  let arrayResposta = [];
  let tamanho = string.length;
  let array = Array.from(string);
  for(let i=0; i<tamanho; i++){
    let stringToAscii = array[i].charCodeAt(0);
    if(stringToAscii >= 65 && stringToAscii <= 90){
      let formula = (stringToAscii - 65 - offset + 26);
      while(formula<0){
      formula = formula + 26;
      }
      let calculo = (formula)% 26 + 65;
      let result = String.fromCharCode(calculo);
      arrayResposta.push(result);
    }else if(stringToAscii >= 97 && stringToAscii <= 122){
      let formula = (stringToAscii - 97 - offset + 26);
      while(formula<0){
      formula = formula + 26;
      }
      let calculo = (formula)% 26 + 97;
      let result = String.fromCharCode(calculo);
      arrayResposta.push(result);
    }else{
      arrayResposta.push(array[i]);
    }
  }
  return arrayResposta.join("");
}

 