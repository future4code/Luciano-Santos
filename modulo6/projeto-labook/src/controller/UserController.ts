import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    public createUser(
        req: Request,
        res: Response
    ) {
        try {
            const { name, email, password } = req.body;

            const userBusiness = new UserBusiness();

            userBusiness.createUser({
                name,
                email,
                password
            });

            res.status(201).send("Usuário criado!");

        } catch (error: any) {
            throw new Error(error.message)
        };
    };
};