export const errors: {[key:string]:{errorCode:number, message:string}} = {
    UNPROCESSABLE_ENTITY: {errorCode: 422, message: "Um ou mais parâmetros ausentes, verifique a documentação!"},
    USER_NOT_FOUND: {errorCode: 404, message: "Não existe um usuário com o ID informado!"}
};