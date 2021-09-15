>**Exercícios de interpretação de código**

>**EXERCÍCIO 1: Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.**

let array
console.log('a. ', array) **_--Imprimirá--> a. UNDEFINED_**

array = null
console.log('b. ', array) **_--Imprimirá--> b. null_**

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) **_--Imprimirá--> c. 11_**

let i = 0
console.log('d. ', array[i]) **_--Imprimirá--> d. 3_**

array[i+1] = 19
console.log('e. ', array) **_--Imprimirá--> e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13_**

const valor = array[i+6]
console.log('f. ', valor) **_--Imprimirá--> f. 9_**

>**EXERCÍCIO 2: Leia o código abaixo com atenção**

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

**_R: SUBI NUM ÔNIBUS EM MIRROCOS, 27_**