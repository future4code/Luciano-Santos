import { Request, Response } from "express";
import { FriendshipBusiness } from "../business/FriendshipBusiness";
import { Friendship } from "../model/friendship";

export class FriendshipController {
    public async createFriendship(
        req: Request,
        res: Response
    ) {
        try {
            const { receivingUserId } = req.body;
            const { requestingUserId } = req.params;
            
            const friendshipBusiness = new FriendshipBusiness();

            const friendship: Friendship = {
                requestingUserId,
                receivingUserId
            };
            
            friendshipBusiness.createFriendship(friendship);

            res.status(201).send("Amizade criada!");
        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public async deleteFriendship(
        req: Request,
        res: Response
    ) {
        try {
            const { requestingUserId, receivingUserId } = req.params;

            const friendshipBusiness = new FriendshipBusiness();
            
            const friendship: Friendship = {
                requestingUserId,
                receivingUserId
            };

            friendshipBusiness.deleteFriendship(friendship);

            res.status(200).send("Amizade desfeita!");
        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};