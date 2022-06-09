import { User } from "../types";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
    public async insertUser(user: User) {
        try {
            await UserDataBase
            .connection
            .insert({
                id: user.id,
                name: user.name,
                email: user. email,
                password: user.password
            })
            .into("labook_users");
        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};