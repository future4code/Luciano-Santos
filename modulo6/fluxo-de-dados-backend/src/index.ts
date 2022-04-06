import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { products } from "./data";
import {v4 as ID } from "uuid";

const app = express();

app.use(express.json());
app.use(cors());

// Teste.
app.get("/test", (req: Request, res: Response) =>{
    console.log("API em funcionamento!");
    res.status(200).send("API em funcionamento!");
});

// Criar um novo produto.
app.post("/products", (req: Request, res: Response) =>{
    const productList = [...products];
    const newProduct = {
        id: ID(),
        name: req.body.name,
        price: req.body.price
    };
    productList.push(newProduct);
    res.status(201).send(productList);
});

// Pegar todos os produtos.
app.get("/products", (req: Request, res: Response) =>{
    const productsList = products.map(product => product);
    res.status(200).send(productsList)
});

// Atualizar um produto.
app.put("/products/:id", (req: Request, res: Response) =>{
    const id = req.params.id;
    const price = req.body.price;

    const productsList = products.map(product =>
       product.id === id ? {...product, price: price} : product 
    );
    res.status(200).send(productsList);
});

// Delete um produto.
app.delete("/products/:id", (req: Request, res: Response) => {
    const id = req.params.id;

    const productsList = products.filter(product => product.id !== id);
    res.status(200).send(productsList);
});


const server = app.listen(3003, () =>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando no endereço http://localhost:${address.port}`);
    }else{
        console.log("Falha ao iniciar o servidor!");
    };
});