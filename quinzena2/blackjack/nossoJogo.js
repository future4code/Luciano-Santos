// Projeto ainda não implementado!

console.log("Boas vindas ao jogo de Blackjack!")
let cartasUsuario = []
let cartasComputador = []

if(confirm("Quer iniciar uma nova rodada?")){
   for(let i = 0; i < 2; i++){
      cartasUsuario[i] = comprarCarta()
      cartasComputador[i] = comprarCarta()
   }
   let somaCartasUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
   let somaCartasComputador = cartasComputador[0].valor + cartasComputador[1].valor

   console.log(`Usuário - cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} - ${somaCartasUsuario} `)
   console.log(`Computador - cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} - ${somaCartasComputador} `)

   if(somaCartasUsuario > somaCartasComputador){
      console.log("O usuário ganhou!")
   }else if(somaCartasComputador > somaCartasUsuario){
      console.log("O computador ganhou!")
   }else{
      console.log("Empate!")
   }
}else{
   console.log("O jogo acabou")
}