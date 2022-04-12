import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { accounts } from "./data";
import { account, extracted } from "../constants/types";
//@ts-ignore
import { errors } from "../constants/errors";
//@ts-ignore
import { returnAge } from "../utils/returnAge";

const app = express();

app.use(express.json());
app.use(cors());

// Buscar todos os clientes.
app.get("/account", (req: Request, res: Response) =>{
    const accountList = accounts.map(account => account);
    res.status(200).send(accountList);
});

// Criar uma conta.
app.post("/account", (req: Request, res: Response) =>{
    try{
        const name: string = req.body.name;
        const CPF: string = req.body.CPF;
        const birthdate: Date =  new Date(req.body.birthdate);

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

// Depositar dinheiro em uma conta.
app.patch("/account", (req: Request, res: Response) =>{
    try{
        const name: string = req.body.name;
        const CPF: string = req.body.CPF;
        const value: number = req.body.value;

        if(!name || !CPF || !value){
            throw new Error(errors.UNPROCESSABLE_ENTITY.message);
        };

        const index: number = accounts.findIndex(
            account => account.name === name && account.CPF === CPF
        );

        if(index < 0){
            throw new Error(errors.USER_NOT_FOUND.message);
        };

        if(value < 0){
            throw new Error(errors.NEGATIVE_VALUE_NOT_ALLOWED.message);
        };

        accounts[index] = {
            ...accounts[index],
            balance: accounts[index].balance + value
        };

        res.status(200).send(`Dinheiro adicionado com sucesso, seu saldo atual é R$${accounts[index].balance}!`);

    } catch(error: any){
        switch(error.message){
            case errors.UNPROCESSABLE_ENTITY.message:
                res.status(errors.UNPROCESSABLE_ENTITY.errorCode).send(errors.UNPROCESSABLE_ENTITY.message);
            break;
            case errors.USER_NOT_FOUND.message:
                res.status(errors.USER_NOT_FOUND.errorCode).send(errors.USER_NOT_FOUND.message);
            break;
            case errors.NEGATIVE_VALUE_NOT_ALLOWED.message:
                res.status(errors.NEGATIVE_VALUE_NOT_ALLOWED.errorCode).send(errors.NEGATIVE_VALUE_NOT_ALLOWED.message);
            break;
        };
    };
});

// Agendar pagamento.
app.post("/account/extracted", (req: Request, res: Response) =>{
    try{
        const CPF = req.query.CPF;
        const date = new Date();
        const currentDate = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear(); 
        const debit: extracted = {
            value: req.body.value,
            date: req.body.date,
            description: req.body.description
        };
    
        if(!CPF || !debit.value ||!debit.description){
            throw new Error(errors.UNPROCESSABLE_ENTITY.message);
        };

        if(!debit.date){
            debit.date = new Date();
        }

        if(new Date(debit.date) < new Date(currentDate)){
            throw new Error(errors.INVALID_DATE.message);
        };
        const exists = accounts.findIndex(account => account.CPF === CPF);

        if(exists < 0){
            throw new Error(errors.USER_NOT_FOUND.message);
        };

        const totalDebts = accounts[exists].extracted.reduce((acc, item) => acc + item.value, 0);
        
        if(debit.value < 0 || debit.value > accounts[exists].balance - totalDebts){
            throw new Error(errors.UNSUPPORTED_VALUE.message);
        };
        accounts[exists].extracted.push(debit);

        res.status(200).send("Pagamento agendado!");

    } catch(error: any){
        switch(error.message){
            case errors.UNPROCESSABLE_ENTITY.message:
                res.status(errors.UNPROCESSABLE_ENTITY.errorCode).send(errors.UNPROCESSABLE_ENTITY.message);
            break;
            case errors.USER_NOT_FOUND.message:
                res.status(errors.USER_NOT_FOUND.errorCode).send(errors.USER_NOT_FOUND.message);
            break;
            case errors.UNSUPPORTED_VALUE.message:
                res.status(errors.UNSUPPORTED_VALUE.errorCode).send(errors.UNSUPPORTED_VALUE.message);
            break;
            case errors.INVALID_DATE.message:
                res.status(errors.INVALID_DATE.errorCode).send(errors.INVALID_DATE.message);
            break;
        };
    };
});

// Pegar saldo atual.
app.get("/account/balance", (req: Request, res: Response) =>{
    try{
        const name = req.query.name;
        const CPF = req.query.CPF;

        if(!name || !CPF){
            throw new Error(errors.UNPROCESSABLE_ENTITY.message);
        };

        const index: number = accounts.findIndex(account => account.name === name && account.CPF === CPF);

        if(index < 0){
            throw new Error(errors.USER_NOT_FOUND.message);
        };

        res.status(200).send(`Seu saldo atual é R$${accounts[index].balance}!`);

    } catch(error: any){
        switch(error.message){
            case errors.UNPROCESSABLE_ENTITY.message:
                res.status(errors.UNPROCESSABLE_ENTITY.errorCode).send(errors.UNPROCESSABLE_ENTITY.message);
            break;
            case errors.USER_NOT_FOUND.message:
                res.status(errors.USER_NOT_FOUND.errorCode).send(errors.USER_NOT_FOUND.message);
            break;
        };
    };
});

// Atualizar saldo.
app.put("/account/balance", (req: Request, res: Response) =>{
    try{
        const CPF = req.query.CPF;
        const date = new Date();
        const currentDate = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear(); 
        

        if(!CPF){
            throw new Error(errors.UNPROCESSABLE_ENTITY.message);
        }
        
        const exists = accounts.findIndex(account => account.CPF === CPF);
        if(exists < 0){
            throw new Error(errors.USER_NOT_FOUND.message);
        }
        const debtsToday = accounts[exists].extracted.filter(debit => 
            new Date(debit.date).getTime() === new Date(currentDate).getTime()
        ).map(debit => debit.value);
        
        const futureDebts = accounts[exists].extracted.filter(debit => 
            new Date(debit.date).getTime() !== new Date(currentDate).getTime()
        );

        if(accounts[exists].balance){
            for(let i = 0; i < debtsToday.length; i++ ){
                accounts[exists] = {
                    ...accounts[exists],
                    balance: accounts[exists].balance - debtsToday[i],
                    extracted: futureDebts
                };
            };
        };
        res.status(200).send(`Saldo atualizado R$${accounts[exists].balance}`);        
    } catch(error: any){
        switch(error.message){
            case errors.UNPROCESSABLE_ENTITY.message:
                res.status(errors.UNPROCESSABLE_ENTITY.errorCode).send(errors.UNPROCESSABLE_ENTITY.message);
            break;
            case errors.USER_NOT_FOUND.message:
                res.status(errors.USER_NOT_FOUND.errorCode).send(errors.USER_NOT_FOUND.message);
            break;
        }
    }
})


const server = app.listen(process.env.PORT || 3003, () =>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando no endereço http://localhost:${address.port}`);
    }else{
        console.log("Falha para iniciar o servidor");
    };
});