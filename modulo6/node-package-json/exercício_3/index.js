// Exercício 3
const taskList = [
    "Ler e-mails",
    "Lançar notas fiscais",
    "Aprovar orçamentos"
]
console.log("Tarefa adicionada com sucesso!")

taskList.push(process.argv[2])

console.log("Tarefas:", taskList)
console.log(storage)