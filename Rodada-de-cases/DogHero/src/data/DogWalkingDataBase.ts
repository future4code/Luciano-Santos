import { DogWalking } from "../model/dogWalking";
import { BaseDataBase } from "./BaseDataBase";

export class DogWalkingDataBase extends BaseDataBase {
    insertDogWalking = async (dogWalking: DogWalking) => {
        try {
            await DogWalkingDataBase
                .connection('DogWalking')
                .insert({
                    id: dogWalking.id,
                    status: dogWalking.status,
                    schedule_date: dogWalking.scheduleDate,
                    price: dogWalking.price,
                    duration: dogWalking.duration,
                    latitude: dogWalking.latitude,
                    longitude: dogWalking.longitude,
                    pets: dogWalking.pets,
                    start_time: dogWalking.startTime,
                    end_time: dogWalking.endTime
                });
        } catch (err: any) {
            throw new Error(err.message);
        };
    };
};