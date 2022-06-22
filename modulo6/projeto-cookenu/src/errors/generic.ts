import { CustomError } from "./CustomError";

export class InvalidInput extends CustomError {
    constructor(){
        super(422, "Entrada inválida ou vazia, verifique a documentação!")
    };
};