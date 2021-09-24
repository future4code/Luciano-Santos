>Exercícios de interpretação de código
1. Leia o código abaixo:

    ```jsx
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    ```

    a) Explique o que o código faz. Qual o teste que ele realiza? 
        
        R: O código pega um número passado pelo usuário através do prompt, o converte para o tipo 'Number', testa se o resto da divisão 
        por 2 é igual a zero, ser for verdade imprime 'Passou no teste.', se for falso imprime 'Não passou no teste.'

    b) Para que tipos de números ele imprime no console "Passou no teste"? 

        R: Para números pares.


    c) Para que tipos de números a mensagem é "Não passou no teste"?

        R: Para números ímpares.


2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

    ```jsx
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        //break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    ```

    a) Para que serve o código acima?

        R: O código serve para mostrar o preço da fruta escolhida pelo usuário.

    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

        R: O preço da fruta Maçã é R$ 2.25

    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

        R: O preço da fruta Pêra é R$ 5.5 

3. Leia o código abaixo:

    ```jsx
    const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)
    ```

    a) O que a primeira linha está fazendo?

        R: Pegando um número pelo prompt e o convertendo para o tipo 'Number', e armazenando na variável de escopo global 'numero'.

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

        R: Caso digite 10: Esse número passou no teste
            
           Caso digite -10: Nada será impresso


    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

        R: Sim, a variável mensagem não está declarada no escopo global. 