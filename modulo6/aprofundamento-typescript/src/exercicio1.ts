// Exercício 1

// a)
const minhaString: string = "Olá Joy!";
// R: Um erro acontece, dizendo que o tipo 'number' não é atribuivel, para 
// o tipo 'string'.

// b) 
const meuNumero: number | string = "";
// R: Para que a variável também aceite strings podemos utilizar o 
// 'union type'.

// c)
// d)
enum coresArcoIris {
    VERMELHA = "vermelha",
    LARANJA = "laranja",
    AMARELA = "amarela",
    VERDE = "verde",
    AZUL = "azul",
    AZUL_ESCURO = "azul-escuro",
    VIOLETA = "violeta"
}

type person = {
    nome: string, 
    idade: number, 
    corFavorita: string
};
const pessoa : person = {
    nome: "Luciano",
    idade: 25,
    corFavorita: coresArcoIris.AZUL
};

const pessoa1 : person = {
    nome: "Pedro",
    idade: 30,
    corFavorita: coresArcoIris.VERDE
};
const pessoa2 : person = {
    nome: "João",
    idade: 20,
    corFavorita: coresArcoIris.VERMELHA
};
const pessoa3 : person = {
    nome: "José",
    idade: 29,
    corFavorita: coresArcoIris.AZUL_ESCURO
};