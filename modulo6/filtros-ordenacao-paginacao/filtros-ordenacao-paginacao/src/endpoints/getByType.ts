import { Request, Response } from "express"
import selectByType from "../queries/selectByType";

export const getByType = async(req: Request,res: Response): Promise<void> =>{
   try {
      let type: string = req.params.type
      const users = await selectByType(type)

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