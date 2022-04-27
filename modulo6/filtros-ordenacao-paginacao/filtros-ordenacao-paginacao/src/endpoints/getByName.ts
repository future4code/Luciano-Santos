import { Request, Response } from "express"
import selectByName from "../queries/selectByName";

export const getByName = async(req: Request,res: Response): Promise<void> =>{
   try {
      let name: string = req.query.name as string
      const users = await selectByName(name)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}