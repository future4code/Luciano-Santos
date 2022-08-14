import { DogWalkingDataBase } from "../data/DogWalkingDataBase";
import { DogWalking, InputDTO } from "../model/dogWalking";
import { calculatePrice } from "../services/calculatePrice";
import { generateID } from "../services/generateID";

const dogWalkingDB = new DogWalkingDataBase;

export class DogWalkingBusiness {
    createDogWalking = async (input: InputDTO) => {
        try {
            const {
                scheduleDate,
                duration,
                latitude,
                longitude,
                pets,
                startTime,
                endTime
            } = input;
            
            const id = generateID();
            const price = calculatePrice(pets, duration) || 0;

            const dogWalking: DogWalking = {
                id,
                scheduleDate,
                price,
                duration,
                latitude,
                longitude,
                pets,
                startTime,
                endTime
            };

            await dogWalkingDB.insertDogWalking(dogWalking);

        } catch (err: any) {
            throw new Error(err.message);
        };
    };
};