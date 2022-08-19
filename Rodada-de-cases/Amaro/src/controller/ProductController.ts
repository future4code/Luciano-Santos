import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { CustomErrors } from "../errors/CustomErrors";
import { ProductInputDTO } from "../model/product";
import { generateId } from "../services/generateId";

const productBusiness = new ProductBusiness();

export class ProductController {
    createProduct = async (req: Request, res: Response) => {
        try {
            const {
                name,
                tags
            } = req.body;

            const product: ProductInputDTO = {
                name,
                tags
            };

            await productBusiness.createProduct(product, generateId);
            
            res.status(201).send("Produto criado ✔️")
        } catch (error: any) {
            res.status(error.status).send(error.message);
        };
    };

    getProduct = async (req: Request, res: Response) => {
        try {            
            const products = await productBusiness.getProduct(req.query.search as string);

            res.send(products);
        } catch (error: any) {
            res.status(error.status).send(error.message);
        };
    };
};