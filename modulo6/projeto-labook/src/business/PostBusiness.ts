import { PostDataBase } from "../data/PostDataBase";
import { Post, PostInputDTO } from "../model/posts";
import { generateId } from "../services/generateId";

export class PostBusiness {
    public async createPost(input: PostInputDTO) {
        try {
            const { photo, description, type, authorId } = input;

            const id: string = generateId();

            const post: Post = {
                id,
                photo,
                description,
                type,
                authorId
            };

            const postDB = new PostDataBase();
            await postDB.insertPost(post);
        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public async getPost(id: string) {
        try {
            const postDB = new PostDataBase();
            
            const result = await postDB.selectPost(id);

            return result;
        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public async getFeed(userId: string) {
        try {            
            const postDB = new PostDataBase();

            const result = await postDB.selectFeed(userId);

            return result;
        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};