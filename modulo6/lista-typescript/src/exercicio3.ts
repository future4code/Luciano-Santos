// Exercicío3
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
};

type infoFilme = {
    nome : string,
    ano: number,
    genero: GENERO,
    pontuacao? : number 
};

const retornaInfo = (
    nome: string, 
    ano: number, 
    genero: GENERO, 
    pontuacao?: number
) : infoFilme =>{
    const info : infoFilme = {
        nome,
        ano,
        genero,
        pontuacao
    };
    return info;
};

console.log(retornaInfo("Homem-Aranha: Sem Volta para Casa", 2021, GENERO.ACAO, 8.6));
