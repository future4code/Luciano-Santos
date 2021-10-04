if(confirm("Bem vindo ao jogo de Blackjack!" + "\n" +
 "Quer iniciar uma nova rodada?")){

   const cartas = {
   usuario:[],
   computador:[]
   }
   
   //Laço que sorteia duas cartas para usuário e computador.
   for(let i = 0; i < 2; i++){
      cartas.usuario[i] = comprarCarta()
      cartas.computador[i] = comprarCarta()
   }

   //Verifica se as duas cartas iniciais do usuário são ases(A), caso True, sorteia novamente.
   if(cartas.usuario[0].texto.includes("A") && cartas.usuario[1].texto.includes("A")){
      for(let i = 0; i < 2; i++){
         cartas.usuario[i] = comprarCarta()
      }   
   }

   //Verifica se as duas cartas iniciais do computador são ases(A), caso True, sorteia novamente.
   if(cartas.computador[0].texto.includes("A") && cartas.computador[1].texto.includes("A")){
      for(let i = 0; i < 2; i++){
         cartas.computador[i] = comprarCarta()
      }
   }
   //Array que armazena apenas os textos das cartas do usuário.
   const filtroTextoUsuario = cartas.usuario.map((item) => {
      return item.texto
   })
   //Array que armazena apenas os valores das cartas do usuário.
   const filtroValorUsuario = cartas.usuario.map((item) => {
      return item.valor
   })
   //Array que armazena apenas os textos das cartas do computador.
   const filtroTextoComputador = cartas.computador.map((item) => {
      return item.texto
   })
   //Array que armazena apenas os valores das cartas do computador.
   const filtroValorComputador = cartas.computador.map((item) => {
      return item.valor
   })
   //Função para calcular as pontuações.
   const calculaPontuacao = (filtroDeValores, arraySomado) =>{
      let soma = 0
      for(i = 0; i < arraySomado.length; i++){
      soma += filtroDeValores[i]   
      }
      return soma
   }




   // if(confirm(`Suas cartas são ${filtroTextoUsuario}. A carta revelada do computador é ${filtroTextoComputador[0]}.
   // Deseja comprar mais uma carta?`)){
   // novoArray = cartas.usuario.push(comprarCarta()) 
   // }
   // confirm(`Suas cartas são ${filtroTextoUsuario}. A carta revelada do computador é ${filtroTextoComputador[0]}.
   // Deseja comprar mais uma carta?`)
   // console.log(novoArray)
}

