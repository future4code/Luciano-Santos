import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/actor", async (req: Request, res: Response): Promise<void> =>{
    try{
        const result = await connection('Actor');

        res.status(200).send(result);
    } catch(error: any){
        res.status(500).send("An unexpected error occurred")
    };
});





const server = app.listen(process.env.PORT || 3003, () =>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando no endereço http://localhost:${address.port}`)
    }else{
        console.log("Falha ao iniciar o servidor!")
    };
});