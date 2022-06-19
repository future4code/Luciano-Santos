import { verify } from "jsonwebtoken";

export const verifyToken = (token: string) => {
    const payload = verify(token, process.env.JWT_KEY as string) as any;
    
    const result = {
        id: payload.id
    };

    return result.id;
};