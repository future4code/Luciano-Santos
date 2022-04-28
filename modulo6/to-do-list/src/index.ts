import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { errors } from "./constants/errors";
import { convertDate } from "./utils/convertDate";
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());
app.use(cors());

// Criar novo usuário.
app.post("/user", async (req: Request, res: Response): Promise<void> =>{
    try {
        await connection.schema.hasTable('TodoListUser').then(exists =>{
            if(!exists){
                return connection.schema.createTable('TodoListUser', table =>{
                    table.string('id').primary();
                    table.string('name');
                    table.string('nickname').unique().notNullable();
                    table.string('email').unique().notNullable();
                });
            };
        });

        const name: string = req.body.name;
        const nickname: string = req.body.nickname;
        const email: string = req.body.email;

        if(!name || !nickname || !email){
            throw new Error(errors.UNPROCESSABLE_ENTITY.message)
        };

        await connection('TodoListUser')
        .insert({
            id: uuidv4(),
            name,
            nickname,
            email
        });

        res.status(201).send("Usuário criado com sucesso!");
    } catch (error: any) {
        switch(error.message){
            case errors.UNPROCESSABLE_ENTITY.message:
                res.status(errors.UNPROCESSABLE_ENTITY.errorCode).send(errors.UNPROCESSABLE_ENTITY.message);
            break;
        };
    };
});

// Pegar usuário pelo id.
app.get("/user/:id", async (req: Request, res: Response): Promise<void> =>{
    try {
        const id: string = req.params.id;
        if(!id){
            throw new Error(errors.UNPROCESSABLE_ENTITY.message);
        };       
        
        const result = await connection
        .select('id', 'nickname')
        .from('TodoListUser')
        .where('id', id);

        if(result.length === 0){
            throw new Error(errors.USER_NOT_FOUND.message);
        };

        res.status(200).send(result);

    } catch (error: any) {
        switch (error.message){
            case errors.UNPROCESSABLE_ENTITY.message:
                res.status(errors.UNPROCESSABLE_ENTITY.errorCode).send(errors.UNPROCESSABLE_ENTITY.message);
            break;
            case errors.USER_NOT_FOUND.message:
                res.status(errors.USER_NOT_FOUND.errorCode).send(errors.USER_NOT_FOUND.message);
            break;
        };
    };
});

// Editar usuário.
app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> =>{
    try {
        const id: string = req.params.id;
        const name: string = req.body.name;
        const nickname: string = req.body.nickname;
        if(!id || !name || !nickname){
            throw new Error(errors.UNPROCESSABLE_ENTITY.message);
        };

        const exists = await connection('TodoListUser').where('id', id);
        if(exists.length === 0){
            throw new Error(errors.USER_NOT_FOUND.message);
        };

        await connection('TodoListUser')
        .where('id', id)
        .update({
            name,
            nickname
        });

        res.status(200).send("Atualizado com sucesso!");
        
    } catch (error: any) {
        switch(error.message){
            case errors.UNPROCESSABLE_ENTITY.message:
                res.status(errors.UNPROCESSABLE_ENTITY.errorCode).send(errors.UNPROCESSABLE_ENTITY.message);
            break;
            case errors.USER_NOT_FOUND.message:
                res.status(errors.USER_NOT_FOUND.errorCode).send(errors.USER_NOT_FOUND.message);
            break;
        };
    };
});

// Criar nova tarefa.
app.post("/task", async (req: Request, res: Response): Promise<void> =>{
    try {
        await connection.schema.hasTable('TodoListTask').then(exists =>{
            if(!exists){
                return connection.schema.createTable('TodoListTask', table =>{
                    table.string('id').primary();
                    table.string('title').notNullable();
                    table.text('description').notNullable();
                    table.string('status').notNullable().defaultTo('to_do');
                    table.date('limit_date').notNullable();
                    table.string('creator_user_id').notNullable();
                    table.foreign('creator_user_id')
                    .references('id')
                    .inTable('TodoListUser');
                });
            };
        });

        const title: string = req.body.title;
        const description: string = req.body.description;
        const status: string = req.body.status;
        const limitDate: Date = new Date(convertDate(req.body.limitDate));
        const creatorUserId: string = req.body.creatorUserId;

        if(!title || !description || !limitDate || !creatorUserId){
            throw new Error(errors.UNPROCESSABLE_ENTITY.message);
        };

        await connection('TodoListTask')
        .insert({
            id: uuidv4(),
            title,
            description,
            status,
            limit_date: limitDate,
            creator_user_id: creatorUserId
        });
        console.log(convertDate(limitDate))
        res.status(201).send("Nova tarefa criada!");
    } catch (error: any) {
        switch(error.message){
            case errors.UNPROCESSABLE_ENTITY.message:
                res.status(errors.UNPROCESSABLE_ENTITY.errorCode).send(errors.UNPROCESSABLE_ENTITY.message);
            break;
        };
    };
});

// Pegar tarefa pelo id.
app.get("/task/:id", async (req: Request, res: Response): Promise<void> =>{
    try {
        const id: string = req.params.id;
        if(!id){
            throw new Error(errors.UNPROCESSABLE_ENTITY.message);
        };

        const result = await connection('TodoListTask')
        .innerJoin(
            'TodoListUser', 
            'TodoListTask.creator_user_id', 
            'TodoListUser.id'
        )
        .select('TodoListTask.*', 'TodoListUser.nickname')
        .where('TodoListTask.id', id);

        res.status(200).send(result);

    } catch (error: any) {
        switch(error.message){
            case errors.UNPROCESSABLE_ENTITY.message:
                res.status(errors.UNPROCESSABLE_ENTITY.errorCode).send(errors.UNPROCESSABLE_ENTITY.message);
            break;
        };
    };
});

















const server = app.listen(process.env.PORT || 3003, () =>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando no endereço http://localhost:${address.port}`);
    }else{
        console.log("Falha para iniciar o servidor!");
    };
});