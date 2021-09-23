// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = Number(prompt("Informe a altura:"));  
  const largura = Number(prompt("Informe a largura"));
  const area = altura * largura;
  console.log(area);
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt("Informe o ano atual:"));
  const anoNascimento = Number(prompt("Informe seu ano de nascimento:"));
  const idade = anoAtual - anoNascimento;
  console.log(idade);
}

// Exercício 3
function calculaIMC() {
  const peso = Number(prompt("Informe seu peso em kg:"));
  const altura = Number(prompt("Informe sua altura em metros:"));
  const imc = peso / (altura * altura);
  console.log(imc);
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("Infome o seu nome:");
  const idade = Number(prompt("Informe a sua idade:"));
  const email = prompt("Informe o seu e-mail:");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email.trim()}.`);
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Informe uma cor favorita:");
  const cor2 = prompt("Informe sua segunda cor favorita:");
  const cor3 = prompt("Informe sua terceira cor favorita:");
  
  console.log([cor1, cor2, cor3]);
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const recebeString = prompt("Digite uma frase:");
  console.log(recebeString.toUpperCase());
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const valorTotalDoEspetaculo = Number(prompt("Qual o valor total do espetacúlo:"));
  const precoDoIngresso = Number(prompt("Qual o preço do ingresso?"));
  const quantidadeDeIngressos = valorTotalDoEspetaculo / precoDoIngresso;
  console.log(quantidadeDeIngressos);
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const string1 = prompt("Escreva uma frase:");
  const string2 = prompt("Escreva outra frase:");
  const compararStrings = (string1.length === string2.length);
  console.log(compararStrings);
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const primeiraString = prompt("Informe uma frase:");
  const segundaString = prompt("Informe outra frase:");
  const comparaStrings = (primeiraString.toUpperCase().toLowerCase() === segundaString.toUpperCase().toLowerCase());
  console.log(comparaStrings);
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Informe o ano atual:"));
  const anoDenascimento = Number(prompt("Informe seu ano de nascimento:"));
  const anoEmissaoCarteira = Number(prompt("Informe o ano que sua carteira foi emitida:"));

  const idade = anoAtual - anoDenascimento;
  const validadeCarteira = anoAtual - anoEmissaoCarteira;

  const renovarCarteira = (idade <= 20 && validadeCarteira >=5) || (idade > 20 && idade <= 50 && validadeCarteira >=10) || (idade > 50 && validadeCarteira >=15);

  console.log(renovarCarteira);
}

// Exercício 11
function checaAnoBissexto() {
  const anoTeste = prompt("Insira um ano:");

  const teste = Boolean(!(anoTeste % 400)) || Boolean(!(anoTeste % 4)) && Boolean((anoTeste % 100));

console.log(teste);
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const maiorDeIdade = prompt("Você tem mais de 18 anos?Responda com SIM ou NÃO");
  const ensinoMedioCompleto = prompt("Você possui ensino médio completo?Responda com SIM ou NÃO");
  const disponibilidadeDeHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?Responda com SIM ou NÃO");

  const validacaoCarteira = maiorDeIdade.includes("sim") && ensinoMedioCompleto.includes("sim") && disponibilidadeDeHorario.includes("sim")

  console.log(validacaoCarteira)
}