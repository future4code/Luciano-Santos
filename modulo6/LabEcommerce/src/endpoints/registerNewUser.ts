import { Request, Response } from "express";
import registerUsers from "../queries/registerUsers";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

export default async function registerNewUser(req: Request, res: Response):Promise<any>{
    try {
        const id = uuidv4();
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        if(!id || !name || !email || !password){
            throw new Error("Parametros faltantes!")
        };

        await registerUsers(id, name, email, password);

        res.status(200).send("Usuário cadastrado!");

    } catch (error: any) {
        res.status(404).send(error.message);
    };
};