import { DuplicateValues } from "../Error/generic";
import { Friendship } from "../model/friendship";
import { BaseDataBase } from "./BaseDataBase";

export class FriendshipDataBase extends BaseDataBase {
    public async insertFriendship(friendship: Friendship) {
        try {
            await FriendshipDataBase
                .connection("labook_friendships")
                .select()
                .where({
                    "requesting_user_id": friendship.requestingUserId,
                    "receiving_user_id": friendship.receivingUserId
                })
                .then(async rows => {
                    if (rows.length === 0) {
                        await FriendshipDataBase.connection("labook_friendships")
                            .insert({
                                requesting_user_id: friendship.requestingUserId,
                                receiving_user_id: friendship.receivingUserId
                            });
                    } else {
                        throw new DuplicateValues;
                    };
                })
                .catch(err => console.log(err.message));
        } catch (error: any) {
            throw new Error(error.message);
        };
    };

    public async deleteFriendship(friendship: Friendship) {
        try {
            await FriendshipDataBase
                .connection("labook_friendships")
                .where({
                    "requesting_user_id": friendship.requestingUserId,
                    "receiving_user_id": friendship.receivingUserId
                })
                .del();
        } catch (error: any) {
            throw new error(error.message);
        };
    };
};