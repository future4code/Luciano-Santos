```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
  
  if(numeroEscolhido === 3){
    return 'Número não encontrado'
  }
  
  let contador = 0
  for(let i = 0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      contador += 1
    }
  }
  
  if(contador === 0){
    return 'Número não encontrado'
  }else{
    return `O número ${numeroEscolhido} aparece ${contador}x`
  }
}