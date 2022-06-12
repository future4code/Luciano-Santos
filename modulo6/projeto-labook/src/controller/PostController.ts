import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { InvalidInput } from "../Error/generic";
import { PostInputDTO } from "../model/posts";

export class PostController {
    public async createPost(
        req: Request,
        res: Response
    ) {
        try {
            const { photo, description, type, authorId } = req.body;

            if(!photo|| !description || !type || !authorId) {
                throw new InvalidInput;
            };

            const postBusiness = new PostBusiness();

            const post: PostInputDTO = {
                photo,
                description,
                type,
                authorId
            };

            await postBusiness.createPost(post);

            res.status(201).send("Post criado!");
        } catch (error: any) {
            res.status(error.errorCode || 400).send(error.message || error.sqlMessage);
        };
    };

    public async getPost(
        req: Request,
        res: Response
    ) {
        try {
            const { id } = req.params;

            const postBusiness = new PostBusiness();

            const result = await postBusiness.getPost(id);
            
            res.status(200).send(result);
        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public async getFeed(
        req: Request,
        res: Response
    ) {
        try {
            const { userId } = req.params;

            const postBusiness = new PostBusiness();

            const result = await postBusiness.getFeed(userId);

            res.status(200).send(result);
        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};