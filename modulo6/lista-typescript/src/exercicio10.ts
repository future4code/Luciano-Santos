const checkValidationCpf = (cpfNumber: string): boolean =>{
    const cpf: number[] =  cpfNumber.replace(/[^0-9]/g, '').split("").map(Number);
    const duplicatesRemoved: number[] = [...new Set(cpf)];
    let firstDv: number = 0;
    let firstAux: number = 0;
    
    let secondDv: number = 0;
    let secondAux: number = 0;

    // loop primeiro digito verificador.
    for(let i: number = 0, j: number = 10; i <= cpf.length - 3; i++, j--){
        firstAux += cpf[i] * j;
        firstDv = 11 - (firstAux % 11) >= 10 ? 0 : 11 - (firstAux % 11);
    };

    // loop segundo digito verificador.
    for(let i: number = 0, j: number = 11; i <= cpf.length - 2; i++, j--){
        secondAux += cpf[i] * j;
        secondDv = 11 - (secondAux % 11) >= 10 ? 0 : 11 - (secondAux % 11);
    };
    
    return cpf[9] === firstDv && cpf[10] === secondDv && duplicatesRemoved.length !== 1 ? true : false;
};

console.log(checkValidationCpf("145.382.206-20"));