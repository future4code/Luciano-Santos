import express from "express";
import { FriendshipController } from "../FriendshipController";

export const friendshipRouter = express.Router();

const friendshipController = new FriendshipController();

friendshipRouter.post("/:requestingUserId", friendshipController.createFriendship);
friendshipRouter.delete("/:requestingUserId/:receivingUserId", friendshipController.deleteFriendship);