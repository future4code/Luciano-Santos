import { user } from "../types/user";
import { BaseDataBase } from "./BaseDataBase";

export class InsertUserDataBase extends BaseDataBase {
   public insertUser = async (
      user: user
   ) => {
      try {
         await InsertUserDataBase.connection.insert({
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            email: user.email,
            password: user.password
         }).into('Architecture_User')
      } catch (error: any) {
         throw new Error(error.message);
      }
   };
};
