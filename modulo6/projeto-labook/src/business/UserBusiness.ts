import { UserDataBase } from "../data/UserDataBase";
import { v4 as generateId } from "uuid";

export class UserBusiness {
    public async createUser(input: any) {
        try {
            const { name, email, password } = input;

            const id: string = generateId();

            const userDB = new UserDataBase();
            await userDB.insertUser({
                id,
                name,
                email,
                password
            });
        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};