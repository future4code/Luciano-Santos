import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("retorna true quando há itens duplicados", () =>{
        const haDuplicados = checaItensDuplicados([1, 3, 3, 2, 1, 6, 10]);
        expect(haDuplicados).toEqual(true);   
    })

    it("retorna false quando não há itens duplicados", () =>{
        const haDuplicados = checaItensDuplicados([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(haDuplicados).toEqual(false)
    })
    
    it("retorna true quando há itens duplicados", () =>{
        const haDuplicados = checaItensDuplicados(["a", "b", "c", "a"])
        expect(haDuplicados).toEqual(true)
    })

    it("retorna false quando não há itens duplicados", () =>{
        const haDuplicados = checaItensDuplicados(["não", "há", "duplicados"]);
        expect(haDuplicados).toEqual(false)
    })

    // A função atualmente é case-sensitive.
    it("retorna true quando há itens duplicados", () =>{
        const haDuplicados = checaItensDuplicados(["teste", "Teste"])
        expect(haDuplicados).toEqual(true)
    })
});
