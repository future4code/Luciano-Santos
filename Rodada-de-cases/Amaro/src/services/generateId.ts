import { v4 } from "uuid";
import { IGenerateId } from "../business/ports";

export class GenerateId implements IGenerateId {
    generate = (): string => {
        return v4();
    };
};