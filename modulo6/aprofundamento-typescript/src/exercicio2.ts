type estatisticas = {
    maior: number,
    menor: number,
    media: number
};


type amostraDeDados = {
    numeros: number[],
    obterEstatisticas : estatisticas
};

function obterEstatisticas(numeros: number[]): estatisticas{
    
    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    );

    let soma: number = 0;

    for (let num of numeros) {
        soma += num
    };

    // propriedades recebem type inference
    const estatisticas: estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };

    return estatisticas;
};

// a) A entrada é um array do tipo 'number' e a saída é um objeto com 
// propriedades do tipo 'number'.

// b) As variáveis são: numerosOrdenados, soma e estatisticas e todas
// recebem 'type inference'.