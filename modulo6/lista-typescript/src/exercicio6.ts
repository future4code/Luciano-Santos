// Exercício 6
type clientes = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
};

const listaDeClientes: clientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
];

const filtrarAlvosDeEmprestimos = (clientes: clientes[]): clientes[] =>{
    const alvos: clientes[] = clientes
    .map(cliente =>{
            const debitos: number = cliente.debitos.reduce((acc, item) => acc + item, 0);
            const novaLista: clientes = {
                ...cliente, saldoTotal: cliente.saldoTotal - debitos, debitos: []
            };
            return novaLista;
        }
    )
    .filter(cliente => cliente.saldoTotal < 0);
    return alvos;
};

console.log(filtrarAlvosDeEmprestimos(listaDeClientes));