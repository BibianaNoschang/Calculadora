const somar = require("./somar.js")
const subtrair = require("./subtrair.js")
const multiplicar = require("./multiplicar.js")
const dividir = require("./dividir.js")
// .js é opcional

const resultadoSoma = somar(5, 6)
const resultadoSubtrair = subtrair(6, 5)

console.log("resultadoSoma: " + resultadoSoma)
console.log("resultadoSubtrair: " + resultadoSubtrair)

const resultadoMultiplicar = multiplicar(6, 5)
const resultadoMultiplicarComZero = multiplicar(5, 0)

console.log("resultadoMultiplicar: " + resultadoMultiplicar)
console.log("resultadoMultiplicarComZero: " + resultadoMultiplicarComZero)

const resultadoDividir = dividir(10,2)
const resultadoDividirPorZero = dividir(10, 0)

console.log("resultadoDividir: " + resultadoDividir)
console.log("ResultadoDividirPorZero: " + resultadoDividirPorZero) 