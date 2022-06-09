import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
    public async createPost(
        req: Request,
        res: Response
    ) {
        try {
            const { photo, description, type, authorId } = req.body;

            const postBusiness = new PostBusiness();

            await postBusiness.createPost({
                photo,
                description,
                type,
                authorId
            });

            res.status(201).send("Post criado!")
        } catch (error: any) {
            throw new Error(error.message);
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
};