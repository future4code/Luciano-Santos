// Exercício 4
enum Setores {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
};

type Pessoas = {
    nome: string,
    salario: number,
    setor: Setores,
    presencial: boolean
};

const infoPessoas: Pessoas[] = [
	{ nome: "Marcos", salario: 2500, setor: Setores.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: Setores.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: Setores.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: Setores.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: Setores.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: Setores.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: Setores.MARKETING, presencial: true }
];

const retornarInfoMarketingPresencial = (funcionarios: Pessoas[]) : Pessoas[] =>{
    const info : Pessoas[] = funcionarios.filter(funcionario =>{
        return funcionario.setor === "marketing" && funcionario.presencial;
    });

    return info;
};

console.log(retornarInfoMarketingPresencial(infoPessoas));

