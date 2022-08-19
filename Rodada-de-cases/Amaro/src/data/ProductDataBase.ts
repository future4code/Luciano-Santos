import { Product, Search } from "../model/product";
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

    selectProduct = async (search: string) => {
        try {
            const result = await ProductDataBase
            .connection('Products')
            .select()
            .where('id', search)
            .orWhere('name', search)
            .orWhereILike('tags', `%${search}%`)
            .orderBy('name', 'asc');

            return result;

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        };
    };

    deleteProduct = async (id: string) => {
        try {
            const result = await ProductDataBase
            .connection('Products')
            .select()
            .where({id});

            await ProductDataBase
            .connection('Products')
            .delete()
            .where({id});
            
            return result[0];

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);
        };
    };
};