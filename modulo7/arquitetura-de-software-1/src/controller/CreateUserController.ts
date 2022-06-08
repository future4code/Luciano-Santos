import { Request, Response } from "express";
import { CreateUserBusiness } from "../business/CreateUserBusiness";

export class CreateUserController {
    public createUser(
        req: Request,
        res: Response
    ) {
        try {

            const { name, nickname, email, password } = req.body;

            const input = {
                name,
                nickname,
                email,
                password
            }

            const userBusiness = new CreateUserBusiness();
            userBusiness.createUser(input);

            res.status(200).send("Usuário criado!")

        } catch (error: any) {
            res.status(400).send(error.message);
        };
    };
};