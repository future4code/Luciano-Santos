export const generateBoletoNumber = (amount: number) => {
    const characters ='0123456789';
    const charactersLength = characters.length;
    const lengthBoletoNumber = 48 - String(amount).length;
    let result = '';

    for ( let index = 0; index < lengthBoletoNumber; index++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    };

    result += amount;
    
    return result;
};