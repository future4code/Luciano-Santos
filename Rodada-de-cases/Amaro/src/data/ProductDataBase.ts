import { Product } from "../model/product";
import { BaseDataBase } from "./BaseDataBase";

export class ProductDataBase extends BaseDataBase {
    insertProduct = async (
        product: Product
    ) => {
        try {
            await ProductDataBase
                .connection('Products')
                .insert(product);
                            
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        };
    };
};