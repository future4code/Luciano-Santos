import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { Product, ProductInputDTO } from "../model/product";
import { GenerateId } from "../services/generateId";

const generateId = new GenerateId();

const productBusiness = new ProductBusiness(generateId);

export class ProductController {
    
    createProduct = async (req: Request, res: Response) => {
        const {
            name,
            price,
            tags
        } = req.body;

        const product: ProductInputDTO = {
            name,
            price,
            tags
        };

        await productBusiness.createProduct(product);

        res.status(201).send("Produto criado ✔️");
    };

    getProduct = async (req: Request, res: Response) => {

        const { search } = req.query;

        const products = await productBusiness.getProduct(search as string);

        res.send(products);

    };

    updateProduct = async (req: Request, res: Response) => {

        const { productId } = req.params;

        const { name, price, tags } = req.body;

        const newProduct: Product = {
            id: productId,
            name,
            price,
            tags
        };

        await productBusiness.updateProduct(newProduct);

        res.send("Produto atualizado com sucesso ✔️");
    };

    deleteProduct = async (req: Request, res: Response) => {

        const { productId } = req.params;

        await productBusiness.deleteProduct(productId);

        res.send("Produto deletado com sucesso ✔️");
    };
};