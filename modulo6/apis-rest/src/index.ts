import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

// Teste.
app.get("/test", (req: Request, res: Response) =>{
    res.status(200).send("Sucesso!");
});

// Buscar todos os usuários.
app.get("/users", (req: Request, res: Response) =>{
    const userList = users.map(user => user);
    res.status(200).send(userList);
});

// Buscar usuários por tipo.
app.get("/users/types", (req: Request, res: Response) =>{
    const type = req.query.type;
    const userList = users.map(user => user);    
    const userListByType = userList.filter(user => user.type === type);
    try {
        if(type === "ADMIN" || type === "NORMAL"){
            res.status(200).send(userListByType);
        }
        throw new Error("Tipos inválidos!");
    } catch (error: any){
        res.status(400).send(error.message);
    };
});

// Buscar usuário por nome.
app.get("/users/name", (req: Request, res: Response) =>{
    const name = req.query.name;
    const userList = users.map(user => user);
    const userListByName = userList.filter(user => user.name === name);
    
    try {
        if(userListByName.length === 0){
            throw new Error("Usuário não encontrado!")
        };
        res.status(200).send(userListByName);
    } catch(error: any){
        res.status(400).send(error.message);
    };
});


const server = app.listen(process.env.PORT || 3003, () =>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando no endereço http://localhost:${address.port}`);
    }else{
        console.log("Falha ao iniciar o servidor!");
    };
});