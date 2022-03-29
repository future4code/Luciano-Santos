// Exercício 1
const printInfo = (name: string, birthdate: string) : string =>{
    const splitDate : string[] = birthdate.split("/");
    
    const info : string = `Olá me chamo ${name}, nasci no dia ${splitDate[0]} do mês ${splitDate[1]} do ano de ${splitDate[2]}.`
    
    return info
};
console.log(printInfo("Luciano", "05/11/1996"));