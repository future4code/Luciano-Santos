// EXERCÍCIO 1:

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

//     O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nomeUsuario = prompt("Qual o seu nome?")
const emailUsuario = prompt("Qual o seu e-mail?")

console.log(`o e-mail ${emailUsuario.trim()} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeUsuario} !`)

// EXERCÍCIO 2:

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

//     a) Imprima na tela o array completo

//     b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. 
//        Imprima na tela a nova lista

const comidasFavoritas = ["churrasco","pizza","pastel","galinhada","estrogonofe"]

console.log(comidasFavoritas)

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

comidasFavoritas[1] = prompt("Qual a sua comida preferida?")

console.log("Lista atualizada:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

// EXERCÍCIO 3:

// 3. Faça um programa, seguindo os passos:

// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// c) Imprima o array na tela

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

// e) Remova da lista o item de índice que o usuário escolheu.

// f) Imprima o array na tela

let listaDeTarefas = []

listaDeTarefas.push(tarefa1 = prompt("Informe uma tarefa diária:"))
listaDeTarefas.push(tarefa2 = prompt("Informe uma tarefa diária:"))
listaDeTarefas.push(tarefa3 = prompt("Informe uma tarefa diária:"))

console.log(listaDeTarefas[0])
console.log(listaDeTarefas[1])
console.log(listaDeTarefas[2])


const indice = Number(prompt(`Informe o indíce de uma tarefa que já realizou: 0 = ${listaDeTarefas[0]}, 1 = ${listaDeTarefas[1]}  ou 2 = ${listaDeTarefas[2]}.`))

const removeIndice = listaDeTarefas.splice(indice, 1)

console.log(listaDeTarefas)
