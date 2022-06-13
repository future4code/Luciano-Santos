import { off } from "process";
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

    public async getAllFeed(
        userId: string,
        page: Number
    ) {
        try {
            const postDB = new PostDataBase();

            const size = 5;
            const offset = size * (Number(page) - 1)

            const result = await postDB.selectAllFeed(userId, size, offset);

            return result;
        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public async getFeedPerType(
        userId: string,
        type: string
    ) {
        try {
            const postDB = new PostDataBase();

            if (!type.includes("normal" && "event")) {
                type = "normal";
            };

            const result = await postDB.selectFeedPerType(userId, type);

            return result;
        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public async liked(
        postId: string,
        liked: string
    ) {
        try {
            const postDB = new PostDataBase();

            await postDB.alterToLike(postId, liked);
        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};