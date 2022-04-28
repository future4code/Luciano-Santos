import { connection } from "../data/connection";

export default async function selectByName(type: string):Promise<any> {
   const result = await connection("aula48_exercicio")
   .where('type', 'like', `%${type}%`)
 
   return result
};