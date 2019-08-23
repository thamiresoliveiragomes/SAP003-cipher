window.cipher = {
  encode: encode,
  decode: decode
};
function encode(offset, string) {
  let arrayResposta = [];
  let tamanho = string.length;
  for (let i=0; i<tamanho; i++) {
    let stringToAscii = string[i].charCodeAt(0);
    if (stringToAscii >= 65 && stringToAscii <= 90) {
      let calculo = (stringToAscii - 65 + offset) % 26 + 65;
      let result = String.fromCharCode (calculo);
      arrayResposta.push (result);
    } else if (stringToAscii >= 97 && stringToAscii <= 122) {
      let calculo = (stringToAscii - 97 + offset) % 26 + 97;
      let result = String.fromCharCode(calculo);
      arrayResposta.push(result);
    } else {
      arrayResposta.push(string[i]);
    }
  }
  return arrayResposta.join("");
}
function decode(offset, string) {
  let arrayResposta = [];
  let tamanho = string.length;
  for (let i=0; i<tamanho; i++) {
    let stringToAscii = string[i].charCodeAt(0);
    if (stringToAscii >= 65 && stringToAscii <= 90) {
      let calculo = (stringToAscii - 90 - offset)% 26 + 90;
      let result = String.fromCharCode (calculo);
      arrayResposta.push (result);
    } else if (stringToAscii >= 97 && stringToAscii <= 122) {
      let calculo = (stringToAscii - 122 - offset) % 26 + 122;
      let result = String.fromCharCode(calculo);
      arrayResposta.push(result);
    } else {
      arrayResposta.push(string[i]);
    }
  }
  return arrayResposta.join("");
}