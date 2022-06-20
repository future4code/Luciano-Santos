import e, { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { InvalidEmailPattern, InvalidPasswordPattern } from "../errors/users";
import { UserInputDTO } from "../model/users";
import { validateEmail } from "../services/validateEmail";
import { validatePassword } from "../services/validatePassword";

const userBusiness = new UserBusiness();

export class UserController {
    public signup = async (
        req: Request,
        res: Response
    ) => {
        try {
            const { name, email, password } = req.body;

            const emailIsValid = validateEmail(email);

            if (!emailIsValid) {
                throw new InvalidEmailPattern();
            };

            const passwordIsValid = validatePassword(password);

            if (!passwordIsValid) {
                throw new InvalidPasswordPattern();
            };

            const user: UserInputDTO = {
                name,
                email,
                password
            };

            const token = await userBusiness.signup(user);

            res.status(201).send({ message: "Usuário criado", token });

        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
        };
    };
};