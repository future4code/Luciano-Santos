// 1 - 

const idadeUsuario = Number(prompt("Qual a sua idade?"))
const idadeAmigo = Number(prompt("Qual a idade de seu melhor amigo(a)?"))

const maiorIdade = idadeUsuario > idadeAmigo
const diferencaIdade = idadeUsuario - idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo(a)?", maiorIdade)
console.log("A diferença de idade é de ", diferencaIdade, " anos!")

// 2 - 

numeroPar = Number(prompt("Insira um número par:"))

restoDivisao = numeroPar % 2

console.log("O resto da divisão do número informado por 2, é:", restoDivisao)

// // R: sim, o resto da divisão sempre será 0. Se o usuário inserir um número ímpar, o resto sempre será 1. 

// 3 - 

idade = Number(prompt("Qual a sua idade em anos?"))

idadeMeses = idade*12
console.log("Sua idade em meses é:", idadeMeses)

idadeDias = (idadeMeses*30)+(5*idade)
console.log("Com base na sua quantidade de anos, sua idade em dias é", idadeDias)

idadeHoras = idadeDias*24
console.log("Com base na sua quantidade de anos, sua idade em horas é aproximadamente:", idadeHoras)

// 4 - 

numero1 = Number(prompt("Informe o primeiro número:"))
numero2 = Number(prompt("Informe o segundo número:"))

console.log("Número1:", numero1, "Número2:",numero2)

console.log("O primeiro numero é maior que o segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?", Boolean(!(numero1 % numero2)))
console.log("O segundo numero é divisível pelo primeiro?", Boolean(!(numero2 % numero1)))


