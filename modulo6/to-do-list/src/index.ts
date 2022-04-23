import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { errors } from "./constants/errors";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/user", async (req: Request, res: Response) =>{
    try {
        const name = req.body.name;
        const nickname = req.body.nickname;
        const email = req.body.email;

        if(!name || !nickname || !email){
            throw new Error(errors.UNPROCESSABLE_ENTITY.message)
        };

        await connection
        .insert({
            name: name,
            nickname: nickname,
            email: email
        })
        .into("Users");

        res.status(201).send("Success!");
    } catch (error: any) {
        switch(error.message){
            case errors.UNPROCESSABLE_ENTITY.message:
                res.status(errors.UNPROCESSABLE_ENTITY.errorCode).send(errors.UNPROCESSABLE_ENTITY.message);
            break;
        };
    };
});










const server = app.listen(process.env.PORT || 3003, () =>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando no endereço http://localhost:${address.port}`);
    }else{
        console.log("Falha para iniciar o servidor!");
    };
});