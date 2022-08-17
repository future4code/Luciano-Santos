import { ProductDataBase } from "../data/ProductDataBase";
import { Product, ProductInputDTO } from "../model/product";

const productDB = new ProductDataBase();

export class ProductBusiness {
    createProduct = async (
        input: ProductInputDTO,
        idGenerator: () => string
    ) => {
        try {
            const { name, tags } = input;

            const id = idGenerator();

            const product: Product = {
                id,
                name,
                tags
            };

            await productDB.insertProduct(product);

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        }
    };

    getProduct = async (search: string) => {
        try {
            const results = await productDB.selectProduct(search);

            const products = results.map(product => {

                const tags = product.tags.split(",");

                return { ...product, tags }

            });

            return products;
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        };
    };
};