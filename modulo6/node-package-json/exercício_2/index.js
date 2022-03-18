// Exercício 2
const operation = process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])

switch(operation && number1 && number2 !== ""){
    case operation === 'add':
        console.log("\x1b[32m", "Resultado:", number1 + number2);
    break;
    case operation === 'sub':
        console.log("\x1b[32m", "Resultado:", number1 - number2);
    break;
    case operation === 'mult':
        console.log("\x1b[32m", "Resultado:", number1 * number2);
    break;
    case operation === 'div':
        console.log("\x1b[32m", "Resultado:", number1 / number2);
    break;
    default:
        console.log("\x1b[31m", 
        `Informe uma operação matemática [
            'add -> somar',
            'sub -> subtrair',
            'mult -> Multiplicar',
            'div -> dividir'
        ], 
        e informe dois números inteiros!`)
}