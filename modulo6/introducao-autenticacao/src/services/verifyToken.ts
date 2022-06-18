import { verify } from "jsonwebtoken";

export const verifyToken = (token: string) => {
    const tokenData = verify(
        token,
        process.env.JWT_KEY as string
    );

    return tokenData;
};