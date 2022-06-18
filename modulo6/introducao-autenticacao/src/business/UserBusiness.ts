import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidPassword } from "../error/customError";
import {
  UserInputDTO,
  user,
  UserOutputDTO
} from "../model/user";
import { generateID } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { verifyToken } from "../services/verifyToken";

export class UserBusiness {
  public signUp = async (input: UserInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      };

      if (!email || !email.includes("@")) {
        throw new InvalidEmail();
      };

      if (password.length < 6) {
        throw new InvalidPassword();
      };

      const id: string = generateID();

      const user: user = {
        id,
        email,
        password,
      };

      const userDatabase = new UserDatabase();

      await userDatabase.insertUser(user);

      const token = generateToken({ id });

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    };
  };

  public login = async (input: UserInputDTO): Promise<string> => {
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

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      const userDatabase = new UserDatabase();

      const user = await userDatabase.findUserByEmail(email);

      if (user.password !== password) {
        throw new InvalidPassword();
      };

      const token = generateToken({id: user.id});

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    };
  };

  public getProfile = async (token: string): Promise<UserOutputDTO> => {
    try {

      const authenticationData = verifyToken(token);

      const userDatabase = new UserDatabase();

      const user = await userDatabase.selectProfile(authenticationData);

      const userOutput: UserOutputDTO = {
        id: user.id,
        email: user.email
      };
      
      return userOutput;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    };
  };
};
