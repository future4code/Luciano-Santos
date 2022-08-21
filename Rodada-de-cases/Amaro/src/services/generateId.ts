import { v4 } from "uuid";
import { IGenerateId } from "../business/ports";

// export const generateId = (): string => {
//     return v4();
// };

export class GenerateId implements IGenerateId {
    generate = (): string => {
        return v4();
    };
}