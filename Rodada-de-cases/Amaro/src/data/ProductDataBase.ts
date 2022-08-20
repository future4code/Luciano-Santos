import { Product } from "../model/product";
import { BaseDataBase } from "./BaseDataBase";

export class ProductDataBase extends BaseDataBase {
    insertProduct = async (product: Product) => {
        await ProductDataBase
            .connection('Products')
            .insert(product);
    };

    selectProduct = async (search: string) => {

        const result = await ProductDataBase
            .connection('Products')
            .select()
            .where('id', search)
            .orWhere('name', search)
            .orWhereILike('tags', `%${search}%`)
            .orderBy('name', 'asc');

        return result;

    };

    updateProduct = async (newProduct: Product) => {
        const result = await ProductDataBase
            .connection('Products')
            .select()
            .where('id', newProduct.id);

        await ProductDataBase
            .connection('Products')
            .where('id', newProduct.id)
            .update({
                name: newProduct.name,
                tags: newProduct.tags
            });

        return result[0];
    };

    deleteProduct = async (id: string) => {
        const result = await ProductDataBase
            .connection('Products')
            .select()
            .where({ id });

        await ProductDataBase
            .connection('Products')
            .delete()
            .where({ id });

        return result[0];
    };
};