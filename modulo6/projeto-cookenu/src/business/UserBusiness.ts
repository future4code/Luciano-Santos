import { UserDataBase } from "../data/UserDataBase";
import { InvalidPassword, UserNotFound } from "../errors/users";
import { User, SignupInputDTO, LoginInputDTO } from "../model/users";
import generateID from "../services/generateID";
import { HashManager } from "../services/HashManager";
import { TokenManager } from "../services/TokenManager";

const userDB = new UserDataBase();
const hashManager = new HashManager();
const tokenManager = new TokenManager();

export class UserBusiness {
    public signup = async (input: SignupInputDTO): Promise<string> => {
        try {

            const id: string = generateID();

            const hashPassword: string = await hashManager.generateHash(input.password);

            const user: User = {
                id,
                name: input.name,
                email: input.email,
                password: hashPassword
            };

            await userDB.insertUser(user);

            const token: string = await tokenManager.generateToken({ id });

            return token;

        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public login = async (input: LoginInputDTO): Promise<string> => {
        try {           

            const user = await userDB.selectUserByEmail(input.email);

            if (!user) {
                throw new UserNotFound();
            };

            const isValid = await hashManager.verifyHash(input.password, user.password);

            if (!isValid) {
                throw new InvalidPassword();
            };
            
            const token = tokenManager.generateToken({ id: user.id });

            return token;
        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};