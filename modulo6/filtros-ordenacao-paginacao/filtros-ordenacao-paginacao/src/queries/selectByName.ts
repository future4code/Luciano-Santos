import { connection } from "../data/connection";

export default async function selectByName(name: string | undefined):Promise<any> {
   const result = await connection("aula48_exercicio")
   .where('name', 'like', `%${name}%`)
 
   return result
};