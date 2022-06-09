import { Post } from "../types";
import { BaseDataBase } from "./BaseDataBase";

export class PostDataBase extends BaseDataBase {
    public async insertPost(post: Post) {
        try {
            await PostDataBase
            .connection
            .insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                author_id: post.authorId
            })
            .into("labook_posts");
        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public async selectPost(id: string) {
        try {
            const result = await PostDataBase
            .connection("labook_posts")
            .select("*")
            .where({
                id: id
            });

            return result;
        } catch (error: any) {
            throw new Error(error.message);
        };  
    };
};