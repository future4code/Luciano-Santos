import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { v4 as generateId  } from "uuid"

export const createUser = async (
   req: Request,
   res: Response
) => {
   try {
      const { name, nickname, email, password } = req.body

      if (
         !name ||
         !nickname ||
         !email ||
         !password
      ) {
         throw new Error('Preencha os campos "name","nickname", "email" e "password"')
      }

      const id: string = generateId()

      await insertUser({
         id,
         name,
         nickname,
         email,
         password
      })

      res.status(201).send({ message: "Usuário criado!" })
   } catch (error:any) {
      res.status(400).send(error.message)
   }
}