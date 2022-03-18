// Exercício 1

// a) Através da propriedade 'process.argv'.

// b)
const myName = process.argv[2]
const myAge = Number(process.argv[3])

myName && myAge ?
console.log("\x1b[32m",`Olá, ${myName} Você tem ${myAge} anos.`) : 
console.log("\x1b[31m", "Parâmetros não encontrados! Informe nome e idade.")

// c)
const futureAge = Number(myAge + 7)
myName && myAge &&
console.log("\x1b[35m" ,`Olá, ${myName}! Você tem ${myAge} anos. Em sete anos você terá ${futureAge}!`)