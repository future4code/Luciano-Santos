import express, { Request, Response } from "express";
import cors from "cors";
import { users, posts, usersType, postsType } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

// Teste.
app.get("/", (req: Request, res: Response) : void =>{
    res.status(201).send("Welcome to API");
});

// Retorna uma lista de usuários para o usuário.
app.get("/users", (req: Request, res: Response) : void =>{
    const dataUsers : usersType[] = users.map(user => user);
    res.status(201).send(dataUsers);
});

// Retorna uma lista de todos para o usuário.
app.get("/posts", (req: Request, res: Response) : void =>{
    const dataPosts : postsType[] = posts.map(post => post);
    res.status(201).send(dataPosts);
});

// Retorna os posts especificos de um usuário.
app.get("/posts/user", (req: Request, res: Response) : void =>{
    const id = req.query.id;

    !id && res.status(400).send("Infome o ID do usuário!");

    const dataPosts : postsType[] = posts.map(post => post);

    const postsUser : postsType[] = dataPosts.filter(post => post.userId === Number(id));

    res.status(201).send(postsUser);
});

// Deletar um post.
app.delete("/posts", (req: Request, res: Response) : void =>{
    const id = req.query.id;
    !id && res.status(400).send("Infome o ID do usuário!");

    const dataPosts : postsType[] = posts.map(post => post);

    const postsUser : postsType[] = dataPosts.filter(post => post.id !== Number(id));

    res.status(201).send(postsUser);
});

// Deletar um usuário.
app.delete("/users", (req: Request, res: Response): void =>{
    const id = req.query.id;
    !id && res.status(400).send("Infome o ID do usuário!");

    const dataUsers : usersType[] = users.map(user => user);

    const newListUsers : usersType[] = dataUsers.filter(user => user.id !== Number(id));

    res.status(201).send(newListUsers);
});

app.listen(3003, () =>{
    console.log("Servidor rodando...")
});

