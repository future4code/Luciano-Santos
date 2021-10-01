// Exercício 1:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a)
const nomesDoguinhos = pets.map((elemento) =>{
    return elemento.nome})
console.log(nomesDoguinhos)

// b)
const cachorrosSalsichas = pets.filter((elemento) =>{
    if(elemento.raca === "Salsicha"){
        return elemento
    }
 })
console.log(cachorrosSalsichas)

// c)
const recebeuDesconto = pets.filter((elemento) =>{
    if(elemento.raca === "Poodle"){
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${elemento.nome}!`)
    }
})

// Exercício 2:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a)
const nomesDosItens = produtos.map((elemento) =>{
    return elemento.nome
})
console.log(nomesDosItens)

// b)
const aplicandoDesconto = (elemento) =>{
    const precoComDesconto = ((elemento.preco) - (elemento.preco * 5)/100)
    const produtosComDesconto = {
        nome: elemento.nome,
        preco: precoComDesconto.toFixed(2)
    }
    return produtosComDesconto
}
const itensComDescontoAplicado = produtos.map(aplicandoDesconto)
console.log(itensComDescontoAplicado)

// c)
const novoArrayCategoriaBebidas = produtos.filter((elemento) =>{
    if(elemento.categoria === "Bebidas"){
        return elemento
    }
})
console.log(novoArrayCategoriaBebidas)

// d)
const novoArrayDeNomesComPalavraYpe = produtos.filter((elemento) =>{
    if(elemento.nome.includes("Ypê")){
        return elemento
    }
})
console.log(novoArrayDeNomesComPalavraYpe)

// e)
const novoArrayDeStringsDeNomesComPalavraYpe = produtos.filter((elemento) =>{
    if(elemento.nome.includes("Ypê")){
        console.log(`Compre ${elemento.nome} por R$${elemento.preco}`)
    }
})
