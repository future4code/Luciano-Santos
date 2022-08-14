export class CustomError extends Error {
    constructor(
        public status: number,
        message: string
    ) {
        super(message);
    };
};

export class InvalidInput extends CustomError {
    constructor(){
        super(422, "Entrada inválida ou vazia, verifique a documentação!")
    };
};