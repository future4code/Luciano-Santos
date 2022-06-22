import { User } from "../model/users";
import { BaseDataBase } from "./BaseDatabase";

export class UserDataBase extends BaseDataBase {
    public insertUser = async (user: User): Promise<void> => {
        try {
            await UserDataBase
                .connection('Users')
                .insert(user);
        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public selectUserByEmail = async (email: string): Promise<User> => {
        try {
            const user: User[] = await UserDataBase
                .connection('Users')
                .where({ email });
                
            return user[0];
        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};