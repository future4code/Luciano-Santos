import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidPassword } from "../error/customError";
import {
  UserInputDTO,
  user,
  UserOutputDTO
} from "../model/user";
import { generateID } from "../services/generateId";
import { generateToken } from "../services/generateToken";
import { HashManager } from "../services/HashManager";
import { verifyToken } from "../services/verifyToken";

const userDatabase = new UserDatabase();
const hashManager = new HashManager();

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

      const hashPassword = await hashManager.generateHash(password);

      const user: user = {
        id,
        email,
        password: hashPassword
      };

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

      const user = await userDatabase.findUserByEmail(email);

      const isValid = await hashManager.compare(password, user.password);

      if (!isValid) {
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
