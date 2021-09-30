//=========================EXERCÍCIO 1========================
const qtdBichosEstimacao = Number(prompt("Quantos bichos de estimação você tem?"))
const listaDeNomes = []

if(qtdBichosEstimacao === 0){
    console.log("Que pena! Você pode adotar um pet!")
}else{
    for(let i = 0; i < qtdBichosEstimacao; i++){
        listaDeNomes[i] = prompt("Digite os nomes de seu bichinhos, um por um:")
    }
    console.log(listaDeNomes)
}

//=========================EXERCÍCIO 2========================
//a.
const arrayOriginal = [10, 123, 19, 17, 18, 90, 100, 62, 87, 91, 99]

const imprimeArrayOriginal = (array) =>{
    console.log(array)
}
imprimeArrayOriginal(arrayOriginal)

//b.
const arrayDividido = []
const divideArrayPorDez = (array) =>{
    for(i = 0; i < arrayOriginal.length; i++){
        arrayDividido[i] = array[i] / 10
    }
    console.log(arrayDividido)
}
divideArrayPorDez(arrayOriginal)

//c.
const novoArray = []
const imprimeValorPar = (array) =>{
	for(let i = 0; i < arrayOriginal.length; i++){
		if(array[i] % 2 === 0){
		novoArray.push(array[i])
		}
	}
	console.log(novoArray)
}
imprimeValorPar(arrayOriginal)

//d.
const novoArrayDeStrings = []
const imprimeArrayDeStrings = (array) =>{
	for(let i = 0; i < arrayOriginal.length; i++){
	novoArrayDeStrings.push(`O elemento do índex ${i} é ${array[i]}`)
    }
	console.log(novoArrayDeStrings)
}
imprimeArrayDeStrings(arrayOriginal)

//e.
let maiorNumero = 0
let menorNumero = 0
const imprimeMaiorMenor = (array) =>{
	for(let i = 0; i < arrayOriginal.length; i++){
		if(maiorNumero < array[i] ){
		maiorNumero = array[i]
		}
		menorNumero = array[0]
		if(menorNumero > array[i]){
		menorNumero = array[i]
		}
    }
    console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
}
imprimeMaiorMenor(arrayOriginal)

//=========================DESAFIOS========================

//1. 
// const numeroDesconhecido = Number(prompt("Qual o número? VAMOS JOGARR!!!"))
// let numeroEscolhido

// for(let quantidadeChutes = 1; numeroEscolhido !== numeroDesconhecido; quantidadeChutes++ ){
//     numeroEscolhido = Number(prompt("Chute um número:"))
//     console.log("O número chutado foi", numeroEscolhido)
//     if(numeroEscolhido === numeroDesconhecido){
//         console.log("Acertou!")
//         console.log("O número de tentativas foi :", quantidadeChutes)
//     }else if(numeroEscolhido > numeroDesconhecido){
//         console.log("Errrrrrrrou, é menor")
//     }else{
//         console.log("Errrrrrrrou, é maior")
//     }
// }

//2.
// let numeroDesconhecido = Math.floor(Math.random() * (100 - 1 + 1) + 1)
// let numeroEscolhido

// for(let quantidadeChutes = 1; numeroEscolhido !== numeroDesconhecido; quantidadeChutes++ ){
//     numeroEscolhido = Number(prompt("Chute um número:"))
//     console.log("O número chutado foi", numeroEscolhido)
//     if(numeroEscolhido === numeroDesconhecido){
//         console.log("Acertou!")
//         console.log("O número de tentativas foi :", quantidadeChutes)
//     }else if(numeroEscolhido > numeroDesconhecido){
//         console.log("Errrrrrrrou, é menor")
//     }else{
//         console.log("Errrrrrrrou, é maior")
//     }
// }

/* Sim! a princípio foi difícil, pois não tinha conhecimento da função 'Math.random()',
o que fiz para resolver foi buscar conhecimento, dando um google... :D */