import { connection } from "../data/connection";

export default async function(
    id: string,
    name: string,
    email: string,
    password: string
): Promise<any>{
    const result = await connection("labcommerce_users")
    .insert({
        'id': id,
        'name': name,
        'email': email,
        'password': password
    });

    return result;
}; 