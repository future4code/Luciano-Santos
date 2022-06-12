import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { InvalidInput } from "../Error/generic";
import { UserInputDTO } from "../model/users";

export class UserController {
    public createUser(
        req: Request,
        res: Response
    ) {
        try {
            const { name, email, password } = req.body;

            if(!name || !email || !password){
                throw new InvalidInput;
            };

            const userBusiness = new UserBusiness();

            const user: UserInputDTO = {
                name,
                email,
                password
            };

            userBusiness.createUser(user);

            res.status(201).send("Usuário criado!");

        } catch (error: any) {
            res.status(error.errorCode || 400).send(error.message || error.sqlMessage);
        };
    };
};