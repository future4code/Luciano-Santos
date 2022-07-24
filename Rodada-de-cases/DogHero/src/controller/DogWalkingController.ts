import { Request, Response } from "express";
import { DogWalkingBusiness } from "../business/DogWalkingBusiness";
import { InputDTO } from "../model/dogWalking";

const dogWalkingController = new DogWalkingBusiness;

export class DogWalkingController {
    createDogWalking = async (req: Request, res: Response) => {
        try {

            const {
                scheduleDate,
                duration,
                latitude,
                longitude,
                pets,
                startTime,
                endTime
            } = req.body;

            const input: InputDTO = {
                scheduleDate,
                duration,
                latitude,
                longitude,
                pets,
                startTime,
                endTime
            };

            await dogWalkingController.createDogWalking(input);

            res.status(201).send("Passeio criado ✅");
        } catch (err: any) {
            throw new Error(err.message);
        };
    };
};