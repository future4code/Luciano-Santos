import { sign } from "jsonwebtoken";
import { AuthenticationData } from "../model/types";

export const generateToken = (payload: AuthenticationData): string => {

    const token = sign(
        { payload },
        process.env.JWT_KEY as string,
        { expiresIn: "30min" }
    );

    return token;
};