import { UserDataBase } from "../data/UserDataBase";
import { User, UserInputDTO } from "../model/users";
import { generateId } from "../services/generateId";

export class UserBusiness {
    public async createUser(input: UserInputDTO) {
        try {
            const { name, email, password } = input;

            const id: string = generateId();

            const user: User = {
                id,
                name,
                email,
                password
            };

            const userDB = new UserDataBase();
            await userDB.insertUser(user);
        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};