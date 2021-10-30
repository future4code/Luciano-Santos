# Exercícios de Fixação de Javascript
># Treino 1

```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salarioFinal = 2000 + (qtdeCarrosVendidos * 100) 
  + (valorTotalVendas * 5 / 100)
  
  return salarioFinal
}