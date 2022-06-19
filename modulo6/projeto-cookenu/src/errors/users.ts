import { CustomError } from "./CustomError";

export class InvalidPasswordPattern extends CustomError {
    constructor() {
        super(422, "Padrão de senha inválido, insira uma senha contendo pelo menos uma letra maiúscula, uma letra minúscula, um dígito, um caractere especial e com um comprimento de no mínimo 6 caracteres");
    };
};

export class InvalidEmailPattern extends CustomError {
    constructor() {
        super(422, "Padrão de email inválido, insira um email parecido com isso: exemplo@email.com")
    };
};