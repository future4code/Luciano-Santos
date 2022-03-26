type produtos = {
    nome: string,
    quantidade: number,
    valorUnitario: any
};


const listaDeProdutos: produtos[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
];

const ajustaPreco = (preco: number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return `R$ ${valorAjustado}`
};

const ordernarListaDeProdutos = (produtos: produtos[]): produtos[] =>{
    const novaLista: produtos[] = produtos
    .map(produto => {
        const valorUnitario: string = ajustaPreco(produto.valorUnitario);
        const lista: produtos = {...produto, valorUnitario: valorUnitario};
        return lista;
    })
    .sort((a, b) => a.quantidade - b.quantidade);
    return novaLista;
};
console.table(ordernarListaDeProdutos(listaDeProdutos));