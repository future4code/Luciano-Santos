import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { accounts } from "./data";
import { account } from "../constants/types";
//@ts-ignore
import { errors } from "../constants/errors";
//@ts-ignore
import { returnAge } from "../utils/returnAge";

const app = express();

app.use(express.json());
app.use(cors());

//Test
app.get("/account", (req: Request, res: Response) =>{
    const accountList = accounts.map(account => account);

    res.status(200).send(accountList);
});

// Create account.
app.post("/account", (req: Request, res: Response) =>{
    try{
        const name: string = req.body.name;
        const CPF: string = req.body.CPF;
        const birthdate: Date = new Date(req.body.birthdate);

        // Verifica maioridade.
        const age = returnAge(birthdate);
        if(age < 18){
            throw new Error(errors.UNDER_AGE.message);
        };
        
        // Verifica se já existe um usuário cadastrado com o CPF informado.
        const exists = accounts.findIndex(account => account.CPF === CPF)
        if(exists >= 0){
            throw new Error(errors.ALREADY_EXISTS.message);
        };

        // Verifica os tipos dos parâmetros informados.
        if(typeof name !== 'string' || typeof CPF !== 'string'){
            throw new Error(errors.BAD_REQUEST.message);
        };

        const account: account = {
            name,
            CPF,
            birthdate,
            balance: 0,
            extracted: []
        };

        // Verifica a ausência de algum parâmetro.
        if(!account.name || !account.CPF || !account.birthdate){
            throw new Error(errors.UNPROCESSABLE_ENTITY.message);
        };
        
        accounts.push(account);
        res.status(201).send("Sucesso: conta criada!");
    } catch(error: any){
        switch(error.message){
            case errors.UNPROCESSABLE_ENTITY.message:
                res.status(errors.UNPROCESSABLE_ENTITY.errorCode).send(errors.UNPROCESSABLE_ENTITY.message);
            break;
            case errors.BAD_REQUEST.message:
                res.status(errors.BAD_REQUEST.errorCode).send(errors.BAD_REQUEST.message);
            break;
            case errors.UNDER_AGE.message:
                res.status(errors.UNDER_AGE.errorCode).send(errors.UNDER_AGE.message);
            break;
            case errors.ALREADY_EXISTS.message:
                res.status(errors.ALREADY_EXISTS.errorCode).send(errors.ALREADY_EXISTS.message);
            break;
        };        
    };    
});












const server = app.listen(process.env.PORT || 3003, () =>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando no endereço http://localhost:${address.port}`);
    }else{
        console.log("Falha para iniciar o servidor");
    };
});