import { CustomError } from "./CustomError";

export class InvalidInput extends CustomError {
    constructor(){
        super(422, "Entrada inválida ou vazia, verifique a documentação!")
    };
};
export class InvalidEmail extends CustomError {
    constructor(){
        super(422, "E-mail inválido, '@' é obrigatório!")
    };
};
export class InvalidPassword extends CustomError {
    constructor(){
        super(422, "A senha necessita ter no minímo 6 caracteres!")
    };
};

export class DuplicateValues extends CustomError {
    constructor(){
        super(409, "Recurso já existe no servidor.")
    };
};