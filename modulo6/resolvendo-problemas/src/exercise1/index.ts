// Considere que a gente só possa fazer três operações com string: adicionar um caractere ao 
// final dele, remover um caractere do final dele ou substituir um caractere por outro. 
// Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir 
// de UMA SÓ dessas operações. Escreva um método que determine se uma string é  'one edit' de outra.

const checkOneEdit = (
    str1: string,
    str2: string
): boolean => {

    let counter: number = 0;

    if (str2.length === str1.length + 2 || str2.length === str1.length - 2)
        return false;

    if (str1.length > str2.length) return str1.includes(str2);
    if (str1.length < str2.length) return str2.includes(str1);

    for (let i = 0; i <= str1.length; i++) {
        if (str1[i] !== str2[i]) counter++
    };

    return counter === 1;

};

console.log(checkOneEdit('carro', 'carrooo'))