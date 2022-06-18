import { CustomError } from "../error/customError";
import { user, UserOutputDTO } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: user): Promise<void> => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    };
  };

  public findUserByEmail = async (email: string): Promise<user> => {
    try {
      const result = await UserDatabase.connection
        .select("*")
        .into("Auth_users")
        .where({email});

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    };
  };

  public selectProfile = async (id: string): Promise<UserOutputDTO> => {
    try {
      const result = await UserDatabase.connection
        .select("*")
        .into("Auth_users")
        .where({id});

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    };
  };
};
