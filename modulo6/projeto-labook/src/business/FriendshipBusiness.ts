import { FriendshipDataBase } from "../data/FriendshipDataBase";
import { Friendship } from "../model/friendship";

export class FriendshipBusiness {
    public async createFriendship(input: Friendship) {
        try {
            const { requestingUserId, receivingUserId } = input;

            const friendship: Friendship = {
                requestingUserId,
                receivingUserId
            };

            const friendshipDB = new FriendshipDataBase();

            friendshipDB.insertFriendship(friendship);

        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public async deleteFriendship(input: Friendship) {
        try {
            const { requestingUserId, receivingUserId } = input;

            const friendshipDB = new FriendshipDataBase();

            const friendship: Friendship = {
                requestingUserId,
                receivingUserId
            };

            await friendshipDB.deleteFriendship(friendship)
        } catch (error: any) {
            throw new Error(error.message);
        };
    };
};