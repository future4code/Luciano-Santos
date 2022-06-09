import { PostDataBase } from "../data/PostDataBase";
import { v4 as generateId } from "uuid";

export class PostBusiness {
    public async createPost(input: any) {
        try {
            const { photo, description, type, authorId } = input;

            const id: string = generateId();

            const postDB = new PostDataBase();
            await postDB.insertPost({
                id,
                photo,
                description,
                type,
                authorId
            });
        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public async getPost(id: string) {
        try {
            const postDB = new PostDataBase();
            const result = postDB.selectPost(id);

            return result;
        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};