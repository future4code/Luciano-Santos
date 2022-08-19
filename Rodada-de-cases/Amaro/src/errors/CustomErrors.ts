export class CustomErrors extends Error {
    constructor(
        public status: number,
        message: string
    ){
        super(message);
    };
};

export class InvalidInput extends CustomErrors {
    constructor(){
        super(422, "Entrada inválida ou vazia, verifique a documentação ❌");
    };
};

export class InvalidLength extends CustomErrors {
    constructor() {
        super(422, "O nome do produto ou as tags devem conter pelo menos 3 caracteres ❌");
    };
};
export class ProductNotFound extends CustomErrors {
    constructor() {
        super(404, "Produto não encontrado ❌");
    };
};