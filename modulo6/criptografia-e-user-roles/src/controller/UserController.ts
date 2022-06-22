import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { SignupDTO, UserInputDTO, UserOutputDTO } from "../model/user";

export class UserController {

  public signUp = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password, role } = req.body;

      const input: SignupDTO = {
        email,
        password,
        role
      };
      
      const userBusiness = new UserBusiness();

      const token = await userBusiness.signUp(input);

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    };
  };

  public login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      const input: UserInputDTO = {
        email,
        password,
      };

      const userBusiness = new UserBusiness();

      const token = await userBusiness.login(input);

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(400).send(error.message);
    };
  };

  public getProfile = async (req: Request, res: Response): Promise<void> => {
    try {
      const { authorization } = req.headers;
      
      const userBusiness = new UserBusiness();

      const profile = await userBusiness.getProfile(authorization!);

      res.status(200).send(profile);
    } catch (error: any) {
      res.status(400).send(error.message);
    };
  };
};
