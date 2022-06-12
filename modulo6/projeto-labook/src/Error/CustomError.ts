export class CustomError extends Error {
    constructor(errorCode: number, message: string){
        super(message);
    };
};