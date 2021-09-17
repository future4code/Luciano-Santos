# **Exercícios de interpretação de código** #

1. Leia o código abaixo

    ```jsx
    function minhaFuncao(variavel) {
    	return variavel * 5
    }

    console.log(minhaFuncao(2)) ----------Imprimirá----------> 10
    console.log(minhaFuncao(10))----------Imprimirá----------> 50
    ```

    a) O que vai ser impresso no console?
    
    R: Será impresso: 10, 50

    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
    
    R: Apenas seria feito a multiplicação dos argumentos por '5', nada seria impresso.

2. Leia o código abaixo

    ```jsx
    let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) {
    	return texto.toLowerCase().includes("cenoura")
    }

    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)
    ```

    a. Explique o que essa função faz e qual é sua utilidade

    R: A função procura dentro do texto informado o elemento 'cenoura', e retorna true se existir ou false, caso não exista. É útil quando necessita-se localizar determinado elemento. 

    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
    
    i.   `Eu gosto de cenoura`----------Imprimirá----------> true
    
    ii.  `CENOURA é bom pra vista`----------Imprimirá----------> true
    
    iii. `Cenouras crescem na terra`----------Imprimirá----------> false