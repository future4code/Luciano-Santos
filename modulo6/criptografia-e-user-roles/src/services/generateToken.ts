import { sign } from "jsonwebtoken";
import { IdToGenerateToken } from "../model/types";

export const generateToken = (id: IdToGenerateToken): string => {

    const token = sign(
        { id },
        process.env.JWT_KEY as string,
        { expiresIn: "30min" }
    );

    return token;
};