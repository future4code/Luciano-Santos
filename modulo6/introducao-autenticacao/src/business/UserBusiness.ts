import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
} from "../model/user";
import { generateID } from "../services/generateId";
import { generateToken } from "../services/generateToken";

export class UserBusiness {
  public signUp = async (input: UserInputDTO) => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }

      if (!email || !email.includes("@")) {
        throw new InvalidEmail();
      }

      if (password.length < 6){
        throw new InvalidPassword();
      }

      const id: string = generateID();

      const user: user = {
        id,
        email,
        password,
      };
      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);

      const token = generateToken({id});

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname, id } = input;

      if (!name || !nickname || !id) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name" e "nickname"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
      };

      const userDatabase = new UserDatabase();
      await userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
