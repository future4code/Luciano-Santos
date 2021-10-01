>Exercícios de interpretação de código

1.  Leia o código abaixo
    
    ```jsx
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" }
    ]
    
    const novoArrayA = usuarios.map((item, index, array) => {
       console.log(item, index, array)
    })
    ```
    
    a) O que vai ser impresso no console?

        R: imprime um a um: elemento, o index de cade elemento, seguido pelo array inteiro.
        Ex.: { nome: "Amanda Rangel", apelido: "Mandi" } 0 { nome: "Amanda Rangel", apelido: "Mandi" }
                                                           { nome: "Laís Petra", apelido: "Laura" }
                                                           { nome: "Letícia Chijo", apelido: "Chijo" }

2. Leia o código abaixo
    
    ```jsx
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayB = usuarios.map((item, index, array) => {
       return item.nome
    })
    
    console.log(novoArrayB)
    ```
    
    a) O que vai ser impresso no console?  
    
        R: ['Amanda Rangel', 'Laís Petra','Letícia Chijo']

3. Leia o código abaixo
    
    ```jsx
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayC = usuarios.filter((item, index, array) => {
       return item.apelido !== "Chijo"
    })
    
    console.log(novoArrayC)
    ```
    
    a) O que vai ser impresso no console?

        R: 
            { nome: "Amanda Rangel", apelido: "Mandi" }
            { nome: "Laís Petra", apelido: "Laura" }