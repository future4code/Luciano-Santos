// ==========EXERCÍCIO 1==========
// a)
// const pessoa = {
//     nome: "Emanuel",
//     apelidos: ["Manu","Manuel","Emanueizinho"]
//}

// const imprimeObjetoPessoa = () =>{
//     console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
// }

//     imprimeObjetoPessoa(pessoa)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos.
// Depois, chame a função feita no item anterior passando como argumento o novo objeto

// const novaPessoa = {
//     ...pessoa, 
//     apelidos: ["Emi","Ly","Emanueuzão"]
// }

// const imprimeObjetoPessoa = () =>{
//     console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos[0]}, ${novaPessoa.apelidos[1]} ou ${novaPessoa.apelidos[2]}`)
// }

// imprimeObjetoPessoa(novaPessoa)

// ==========EXERCÍCIO 2==========
// const dadosPessoa1 = {
//     nome: "Maria",
//     idade: 25,
//     profissao: "Dentista",
//         dadosPessoa2: {
//         nome: "João",
//         idade: 28,
//         profissao: "Farmacêutico" 
//         }
// }

// const imprimeDadosPessoas = (pessoa1, pessoa2) =>{
//     return console.log([dadosPessoa1.nome, dadosPessoa1.nome.length, dadosPessoa1.idade, dadosPessoa1.profissao, dadosPessoa1.profissao.length,
//     dadosPessoa1.dadosPessoa2.nome, dadosPessoa1.dadosPessoa2.nome.length, dadosPessoa1.dadosPessoa2.idade, dadosPessoa1.dadosPessoa2.profissao, 
//     dadosPessoa1.dadosPessoa2.profissao.length ])

// }

// imprimeDadosPessoas(dadosPessoa1, dadosPessoa1.dadosPessoa2)

// ==========EXERCÍCIO 3==========
// let carrinho = []

// const primeiraPrateleiraSacolao = {
//     nome: "laranja",
//     disponibilidade: true
// }
// const segundaPrateleiraSacolao = {
//     nome: "maça",
//     disponibilidade: true
// }
// const terceiraPrateleiraSacolao = {
//     nome: "melão",
//     disponibilidade: true
// }

// const enviarParaCarrinho = (frutas) =>{
//     carrinho.push(frutas)
    
// }
// enviarParaCarrinho(primeiraPrateleiraSacolao)
// enviarParaCarrinho(segundaPrateleiraSacolao)
// enviarParaCarrinho(terceiraPrateleiraSacolao)

// console.log(carrinho)