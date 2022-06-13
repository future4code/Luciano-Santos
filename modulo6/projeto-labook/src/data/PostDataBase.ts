import { Post } from "../model/posts";
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

    public async selectAllFeed(
        userId: string,
        size: number,
        offset: number
    ) {
        try {
            const result = await PostDataBase
                .connection({ p: "labook_posts" })
                .select(
                    "p.author_id",
                    "p.photo",
                    "p.description",
                    "p.type",
                    "p.liked",
                    "p.created_at"
                )
                .innerJoin(
                    { f: "labook_friendships" },
                    "p.author_id",
                    "f.receiving_user_id"
                )
                .where("f.requesting_user_id", userId)
                .whereNot(
                    "f.requesting_user_id", "p.author_id"
                )
                .orderBy("p.created_at", "desc")
                .limit(size)
                .offset(offset);
            return result;
        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public async selectFeedPerType(
        userId: string,
        type: string
    ) {
        try {
            const result = await PostDataBase
                .connection({ p: "labook_posts" })
                .select(
                    "p.author_id",
                    "p.photo",
                    "p.description",
                    "p.type",
                    "p.liked",
                    "p.created_at"
                )
                .innerJoin(
                    { f: "labook_friendships" },
                    "p.author_id",
                    "f.receiving_user_id"
                )
                .where({
                    "f.requesting_user_id": userId,
                    "p.type": type
                })
                .whereNot(
                    "f.requesting_user_id", "p.author_id"
                )
                .orderBy("p.created_at", "desc");
            return result;
        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public async alterToLike(
        postId: string,
        liked: string
    ) {
        try {
            await PostDataBase
                .connection("labook_posts")
                .where("id", postId)
                .update({
                    liked
                });
        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};