import { ProductDataBase } from "../data/ProductDataBase";
import { Products } from "../domain/product";
import { InvalidInput, InvalidLength, ProductNotFound } from "../errors/CustomErrors";
import { Product, ProductInputDTO } from "../model/product";
import { IGenerateId } from "./ports";

const productDB = new ProductDataBase();

export class ProductBusiness {

    constructor(
        private generateId: IGenerateId
    ){};
    
    createProduct = async (
        input: ProductInputDTO
    ) => {
        const { name, price, tags } = input;

        new Products(name, price, tags);

        if (!name || !price || !tags) {
            throw new InvalidInput();
        };

        const id = this.generateId.generate();

        const product: Product = {
            id,
            name,
            price,
            tags
        };

        await productDB.insertProduct(product);
    };

    getProduct = async (search: string) => {

        const results = await productDB.selectProduct(search);
        
        if (results.length < 1) {
            throw new ProductNotFound();
        };

        const products = results.map(product => {

            const tags = product.tags.split(",");

            return { ...product, tags };

        });

        return products;
    };

    updateProduct = async (input: Product) => {

        const { id, name, price, tags } = input;

        if (!name || !price || !tags) {
            throw new InvalidInput();
        };

        const newProduct: Product = {
            id,
            name,
            price,
            tags
        };

        const result = await productDB.updateProduct(newProduct);

        if (!result) {
            throw new ProductNotFound();
        };
    };

    deleteProduct = async (productId: string) => {

        const result = await productDB.deleteProduct(productId);

        if (!result) {
            throw new ProductNotFound();
        };
    };
};