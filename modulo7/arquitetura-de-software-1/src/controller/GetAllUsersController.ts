import { Request, Response } from "express";
import { GetAllUsersBusiness } from "../business/GetAllUsersBusiness";

export class GetAllUsersController {
    public getAllUsers(
        req: Request,
        res: Response
    ): void {
        try {
            const usersBusiness = new GetAllUsersBusiness();

            const users  = usersBusiness.getAllUsers();

            res.status(200).send(users)

        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};