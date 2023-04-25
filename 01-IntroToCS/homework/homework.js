"use strict";

function BinarioADecimal(num) {
  var resultado = 0;
  var indice = num.length - 1;
  for (var i = 0; i < num.length; i++) {
    resultado = resultado + num[i] * 2 ** indice;
    indice = indice - 1;
  }
  return resultado;
}

function DecimalABinario(num) {
  var resultado = "";
  while (num > 0) {
    var resto = num % 2;
    resultado = resto + resultado;
    num = Math.floor(num / 2);
  }
  return resultado;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
