// Exercícios de escrita de código

// Exercício 1:
console.log("REFERENTE AO EXERCÍCIO 1:")

let nome
let idade

console.log(typeof nome,",",idade)

//O tipo 'undefined' foi impresso porque as variáveis não foram inicializadas.

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

//Foi impresso o tipo 'String' para as duas variáveis, pois partem de um 'prompt', que recebem apenas strings. 

console.log("Olá",nome,", você tem", idade, "anos!")

// Exercício 2:
console.log("REFERENTE AO EXERCÍCIO 2:")

maiorDeIdade = prompt("Você é maior de idade?")
cursar = prompt("Você gostaria de fazer algum curso?")
programar = prompt("Você gostaria de estudar programação?")

console.log("Você é maior de idade?", maiorDeIdade)
console.log("Você gostaria de fazer algum curso?", cursar)
console.log("Você gostaria de estudar programação?", programar)

// Exercício 3:
console.log("REFERENTE AO EXERCÍCIO 3:")

let a = 0
let b = 1

console.log("Valor inicial de 'a':", a)
console.log("Valor inicial de 'b':", b)

let c = a  // Terceira variável para armazenar o valor de 'a'.

a = b 
b = c

console.log("O novo valor de 'a' é:", a)
console.log("O novo valor de 'b' é:", b)



