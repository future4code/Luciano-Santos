import { CustomError } from "./CustomError";

export class InvalidInput extends CustomError {
    constructor(){
        super(422, "Entrada inválida ou vazia, verifique a documentação!")
    };
};

export class DuplicateValues extends CustomError {
    constructor(){
        super(409, "Recurso já existe no servidor.")
    };
};