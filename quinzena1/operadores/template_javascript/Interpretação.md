<h2><b>1 - Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa</b></h2>

const bool1 = true<p>
const bool2 = false<p>
const bool3 = !bool2<p>

let resultado = bool1 && bool2<p>
console.log("a. ", resultado) <i><b>----------IMPRIMIRÁ----------> a. false</i></b>

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) <i><b>----------IMPRIMIRÁ----------> b. false</i></b>

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) <i><b>----------IMPRIMIRÁ----------> c. true</i></b>

console.log("d. ", typeof resultado) <i><b>----------IMPRIMIRÁ----------> d. boolean</i></b>



<h2><b>2 - Seu colega se aproxima de você falando que o código dele não funciona como devia.
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?</b></h2><p>

let primeiroNumero = prompt("Digite um numero!")<p>
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

<i><b>R: Sim, o 'prompt' retorna apenas strings, não será impresso uma soma de valores numéricos e sim a concatenação de duas strings, se o valor da 
variável primeiroNumero = 20 e variável segundoNumero = 21, será impresso: 2021 e não o valor 41.</i></b>



<h2><b>3 - Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.</b></h2>

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

<i><b>Solução: Converter as strings retornadas pelo prompt através do comando Number.</i></b>