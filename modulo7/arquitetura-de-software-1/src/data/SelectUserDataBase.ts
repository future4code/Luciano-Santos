import { user } from "../types/user";
import { BaseDataBase } from "./BaseDataBase";

export class SelectUserDataBase extends BaseDataBase{
    public selectUser = async () =>{
        try {
            const users: user[] = [];
            const result: user[] = await SelectUserDataBase.connection("Architecture_User");

            // for(let user of result){
            //     users.push(user)
            // };
            return result;
        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};