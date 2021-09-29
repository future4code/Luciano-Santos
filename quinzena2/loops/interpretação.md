>Exercícios de interpretação de código
1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    
    ```jsx
    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
    ```

        R: Repete o laço enquanto 'i' for menor que 5, a cada repetição soma o valor de 'i', na variável valor. O resultado 
        impresso será 10. 

2. Leia o código abaixo:
    
    ```jsx
    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
        if (numero > 18) {
    		console.log(numero)
    	}
    }
    ```
    
    a) O que vai ser impresso no console?
    
        R: 19, 21, 23, 25, 27, 30
    
    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se não, o que poderia ser usado para fazer isso?

        R: Não, sugiro o 'for'. ex.: for(let i = 0; i < array.length; i++), o índice seria acessado através da variável 'i'.

3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    
    ```jsx
    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }
    
    ```
        R:
        *
        **
        ***
        ****