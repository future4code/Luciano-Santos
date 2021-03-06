// EXERCÍCIO 01
function inverteArray(array) {
  const novoArr = []
  for(i = array.length - 1; i >= 0; i-- ){
    novoArr.push(array[i])
  }
  return novoArr
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const numerosParesElevadosADois = []
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      numerosParesElevadosADois.push(array[i] * array[i])
    }
  }
  return numerosParesElevadosADois
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const numerosPares = []
  for(i = 0; i < array.length; i++){
    if (!(array[i] % 2)){
      numerosPares.push(array[i])
    }
  }
  return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for(i = 0; i < array.length; i++){
    if(maiorNumero < array[i]){
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const qtdElementosArray = array.length
  return qtdElementosArray
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  const respostas = [booleano1 && booleano2 && !booleano4,
    (booleano1 && booleano2) || !booleano3,(booleano2 || booleano3) && (booleano4 || booleano1),
    !(booleano2 && booleano3) || !(booleano1 && booleano3),
    !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  ]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const numerosPares = []
  for(i = 0; numerosPares.length <= n - 1; i++){
  if(i % 2 === 0){
    numerosPares.push(i)
  }
}
return numerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a !== b && b !== c){
    return 'Escaleno'  
  }else if(a === b && b ===c){
    return 'Equilátero' 
  }else{
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  
  let maior
  let menor
  
  const defineQualmaiorQualMenor = (valor1, valor2) =>{
    if(valor1 > valor2){
      maior = valor1
      menor = valor2
    }else{
      maior = valor2
      menor = valor1
    }
  }
  defineQualmaiorQualMenor(num1, num2)
  
  const defineSeMaiorEDivisivelPorMenor = (maiorNumero, menorNumero) =>{
    if(maiorNumero % menorNumero === 0 ){
      return true
    }else{
      return false
    }
  }

  let objeto = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: defineSeMaiorEDivisivelPorMenor(maior, menor),
    diferenca: maior - menor
  }
  return objeto
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  const novoArray = []  
  
  // Objeto para armazenar o dois maiores e os menores números.
  let numeros = {
    primeiroMaior: -Infinity,
    segundoMaior: -Infinity,
    primeiroMenor: Infinity,
    segundoMenor: Infinity
  }
  // Laço para definir o primeiro maior número.
  for(i = 0; i < array.length; i++){
    if(numeros.primeiroMaior < array[i]){
      numeros.primeiroMaior = array[i]
    }
  }
  // Laço para definir o segundo maior número.
  for(i = 0; i < array.length; i++){
    if(numeros.segundoMaior < array[i] && 
      array[i] < numeros.primeiroMaior){
      numeros.segundoMaior = array[i]
    }
  }  
  // Laço para definir o primeiro menor número.
  for(i = 0; i < array.length; i++){
    if(numeros.primeiroMenor > array[i]){
      numeros.primeiroMenor = array[i]
    }
  }
  // Laço para definir o segundo maior número.
  for(i = 0; i < array.length; i++){
    if(numeros.segundoMenor > array[i] && array[i] > numeros.primeiroMenor){
      numeros.segundoMenor = array[i]
    }
  }
  // Push para dentro do novo array.
  novoArray.push(numeros.segundoMaior, numeros.segundoMenor)
  
  return novoArray
}


// EXERCÍCIO 11
function ordenaArray(array) {

  for(let contador = 1; contador < array.length; contador++){
    for(i = 0; i < array.length; i++){
      if(array[i] > array[i + 1]){
      let guardaValor = array[i]
      array[i] = array[i + 1]
      array[i + 1] = guardaValor                
      }
    }
  }
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  
  const descricaofilme = {
    nome:"O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return descricaofilme
}

// EXERCÍCIO 13
function imprimeChamada() {
  let copiaDescricaoFilmes = filmeFavorito()
  
  return `Venha assistir ao filme ${copiaDescricaoFilmes.nome}, de ${copiaDescricaoFilmes.ano}, dirigido por ${copiaDescricaoFilmes.diretor} e estrelado por ${copiaDescricaoFilmes.atores[0]}, ${copiaDescricaoFilmes.atores[1]}, ${copiaDescricaoFilmes.atores[2]}, ${copiaDescricaoFilmes.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const propriedadesRetangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2 
  }
  return propriedadesRetangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const pessoaAnonima = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return pessoaAnonima
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  let novoArray = arrayDePessoas.filter((item) => {
    return item.idade >= 18
  })
  return novoArray
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  let novoArray = arrayDePessoas.filter(item => {
    return item.idade < 18
  })
  return novoArray
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  let novoArray = array.map(item =>{
    return item * 2
  })
  return novoArray
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let novoArray = array.map(item =>{
    return String(item * 2)
  })
  return novoArray 
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  let novoArray = array.map(item =>{
    if(item % 2 === 0){
      return `${item} é par`
    }else{
      return `${item} é ímpar` 
    }
  })
  return novoArray
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const novoArray = pessoas.filter(item =>{
    if(item.altura >= 1.5 &&
      item.idade > 14 &&
      item.idade < 60 ){
        return item
      }
  })
  return novoArray
} 

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const novoArray = pessoas.filter(item =>{
    if(item.altura < 1.5 ||
      item.idade <= 14 ||
      item.idade >= 60){
        return item
      }
  })
  return novoArray
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  const novoArray = consultasNome.sort((a, b) =>{
    return a.nome.localeCompare(b.nome)
  })
  return novoArray
}
ordenaPorNome()
// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  console.log(consultasData[0].dataDaConsulta)
}
ordenaPorData()
// EXERCÍCIO 20
function calculaSaldo(contas) {

}