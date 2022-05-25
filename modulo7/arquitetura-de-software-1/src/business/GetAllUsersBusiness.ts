import { SelectUserDataBase } from "../data/SelectUserDataBase";

export class GetAllUsersBusiness{
    public getAllUsers = async () => {
        try {
            const usersDB = new SelectUserDataBase();
            console.log(usersDB.selectUser())

            return await usersDB.selectUser();
        } catch(error: any){
            throw new Error(error.message);
        };
    };
};