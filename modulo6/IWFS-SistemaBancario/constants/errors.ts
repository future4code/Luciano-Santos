export const errors: {[key: string]: {errorCode: number, message: string}} = {
    UNPROCESSABLE_ENTITY: {errorCode: 422, message: "Um ou mais parâmetros ausentes, verifique a documentação!"},
    BAD_REQUEST: {errorCode: 400, message: "Um ou mais parâmetros inválidos, verifique a documentação!"},
    UNDER_AGE:{errorCode: 401, message: "Somente pessoas maiores de idade podem criar uma conta!"},
    ALREADY_EXISTS:{errorCode: 409, message: "Já existe um usuário com o CPF informado!"}
};