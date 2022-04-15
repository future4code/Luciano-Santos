type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// Criaria um script no arquivo 'package.sjon' da seguinte forma:
// "exercicio4": "tsc && node ./build/exercicio4.js";

// Não seria diferente pois existe uma configuração feita dentro do arquivo
// tsconfig.json, atráves da propriedade 'rootDir', setada com a pasta 'src'.

// Sim, passando os nomes dos arquivos em sequência.
