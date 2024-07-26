//1. tipo entero y decimal
const entero = 23
const decimal = 2.3

console.log(typeof entero, typeof decimal)

//2. notacion cientifica
const cientifico = 5e3

//3. infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

//Operaciones Aritmeticas
//1. Suma, Resta, Multiplicacion y Division
const suma = 1 + 1
const resta = 1 - 1
const multiplicacion = 2 * 3
const division = 10 / 2

//2. Modulo y exponenciacion
const modulo = 15 % 8
const exponenciacion = 2 ** 3

//precision
const resultado = 0.1 + 0.2 
console.log(resultado)
console.log(resultado.toFixed(2))
console.log(resultado === 0.3)

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)