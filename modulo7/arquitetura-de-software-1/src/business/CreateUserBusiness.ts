import { InsertUserDataBase } from "../data/InsertUserDataBase";
import { v4 as generateId  } from "uuid"

export class CreateUserBusiness{
   public createUser = async (input: any) => {
      try {
         const { name, nickname, email, password } = input;
   
         if (!name || !nickname || !email || !password) {
            throw new Error(
               'Preencha os campos "name","nickname", "email" e "password"'
            )
         };
   
         const id: string = generateId()

         const userDB = new InsertUserDataBase();
   
         await userDB.insertUser({
            id,
            name,
            nickname,
            email,
            password
         })
      } catch (error:any) {
         throw new Error(error.message);
      };
   };
};