const posts: posts[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
];
// a)
type posts = {
    autor: string,
    texto: string
};
// b) As entradas são um array definido pelo tipo 'posts' e por um string. A saída
// é um array do tipo 'posts'.
function buscarPostsPorAutor(posts : posts[], autorInformado : string) : posts[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    );
};

console.log(buscarPostsPorAutor(posts, "Dobby"));