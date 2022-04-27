import { Request, Response } from "express"
import selectAllUsers from "../queries/selectAllUsers";

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        let sort: string = req.query.sort as string;
        if(!sort || sort !== 'name' || 'type'){
            sort = 'email'
        };

        let order: string = req.query.order as string;
        if(!order || order.toUpperCase() !== 'ASC'){
            order = 'ASC'
        };

        let page = Number(req.query.page);
        const size = 5;
        let offset = size * (page-1)
        
        if(!page || isNaN(page)){
            page = 1;
        };

        const users = await selectAllUsers(sort, order, size, offset)

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