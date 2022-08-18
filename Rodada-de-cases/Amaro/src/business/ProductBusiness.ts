import { ProductDataBase } from "../data/ProductDataBase";
import { CustomErrors, InvalidInput, InvalidLength } from "../errors/CustomErrors";
import { Product, ProductInputDTO } from "../model/product";

const productDB = new ProductDataBase();

export class ProductBusiness {
    createProduct = async (
        input: ProductInputDTO,
        idGenerator: () => string
    ) => {
        try {
            const { name, tags } = input;

            if ( !name || !tags) {
                throw new InvalidInput();
            };

            if (name.length < 3 || tags.length < 3 ) {
                throw new InvalidLength();
            };
            
            const id = idGenerator();

            const product: Product = {
                id,
                name,
                tags
            };

            await productDB.insertProduct(product);

        } catch (error: any) {
            throw new CustomErrors(error.status, error.message);
        }
    };

    getProduct = async (search: string) => {
        try {
            const results = await productDB.selectProduct(search);

            const products = results.map(product => {

                const tags = product.tags.split(",");

                return { ...product, tags };

            });

            return products;
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        };
    };
};