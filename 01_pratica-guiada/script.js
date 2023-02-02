/*
saldo = 15
saldo = saldo + 22.40
console.log(`Valor do saldo após a primeira operação: ${saldo}`)
//operação número 2
saldo = saldo - 12.34
console.log(`Valor do saldo após a primeira operação: ${saldo}`)
//operação número 3
saldo = saldo / 3
console.log(`Valor do saldo após a primeira operação: ${saldo}`)
//operação número 4
saldo = saldo * 3.42
console.log(`Meu saldo após investimento é: ${saldo}`)
//operação número 5
//saldo assumirá o valor do resto da divisão do dinheiro por 3
saldo = saldo % 3
console.log(`Agora eu tenho ${saldo} para comprar meus dadinhos`)
console.log(2 * 2 + 2)
console.log(2 * (2 + 2))
*/

//parte 2
/*
const resultado1 = 5 === 5
console.log(resultado1)
//true
const resultado2 = 5 !== 5
console.log(`Comparação 2: ${resultado2}`)
//false
const resultado3 = 5 !== '5'
console.log(`Comparação 3: ${resultado3}`)
//true
const resultado4 = '5' === 'cinco'
console.log(`Comparação 4: ${resultado4}`)
//false
const resultado5 = typeof 5 === typeof 20
console.log(`Comparação 5: ${resultado5}`)
//true             number        number
const resultado6 = typeof '5' === typeof 'cinco'
console.log(`Comparação 6: ${resultado6}`)
//                   string            string
*/

// ex3

const primeiroNumero = 15
const segundoNumero = 15
const compara1 = primeiroNumero === segundoNumero

console.log(`O primeiro número é igual ao segundo? ${compara1}`)

// parte 2

const compara2 = primeiroNumero <= segundoNumero
console.log(`O primeiro número é menor ou igual ao segundo? ${compara2}`)

//parte 3

const compara3 = primeiroNumero > segundoNumero
console.log(`O primeiro número é maior que o segundo? ${compara3}`)

//parte 4

const compara4 = primeiroNumero < segundoNumero
console.log(`O primeiro número é menor que o segundo? ${compara4}`)

