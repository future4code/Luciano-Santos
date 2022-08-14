import express from "express";
import { DogWalkingController } from "../DogWalkingController";

export const dogWalkingRouter = express.Router();

const dogWalkingController = new DogWalkingController;

dogWalkingRouter.post("/", dogWalkingController.createDogWalking);