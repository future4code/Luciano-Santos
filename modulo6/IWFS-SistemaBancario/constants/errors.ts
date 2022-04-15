export const errors: {[key: string]: {errorCode: number, message: string}} = {
    UNPROCESSABLE_ENTITY: {errorCode: 422, message: "Um ou mais parâmetros ausentes, verifique a documentação!"},
    NEGATIVE_VALUE_NOT_ALLOWED: {errorCode: 422, message: "Ao adicionar saldo, não é permitido valores negativos!"},
    UNSUPPORTED_VALUE: {errorCode: 422, message: "Não é permitido valores negativos ou maiores que o saldo atual!"},
    BAD_REQUEST: {errorCode: 400, message: "Um ou mais parâmetros inválidos, verifique a documentação!"},
    UNDER_AGE:{errorCode: 401, message: "Somente pessoas maiores de idade podem criar uma conta!"},
    INVALID_DATE:{errorCode: 401, message: "Não é permitido agendar pagamentos com datas menores que a data atual!"},
    USER_NOT_FOUND:{errorCode: 401, message: "Usuário não encontrado, verifique as credenciais!"},
    ALREADY_EXISTS:{errorCode: 409, message: "Já existe um usuário com o CPF informado!"},
    INTERNAL_SERVER_ERROR: {errorCode: 500, message: "Há um problema com alguma das bases que faz o sistema rodar, comunique o suporte!"}
};