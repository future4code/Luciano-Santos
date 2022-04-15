import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { toDos, typeToDos } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

// Teste.
app.get("/ping", (req: Request, res: Response) =>{
    res.status(201).send("pong 🏓");
});

// Retornar lista de tarefas de acordo com o status.
app.get("/todos", (req: Request, res: Response) =>{
    const status = req.body.completed;

    !status && res.status(400).send("informe o status da tarefa no body!");

    const check: typeToDos[] = toDos.filter(
        toDo => String(toDo.completed) === status
    );
    
    res.status(201).send(check);
});

const server = app.listen(3003, () =>{
    if (server){
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando no endereço http://localhost${address.port}`);
    }else{
        console.log("Falha ao iniciar o servidor!");
    };
});