import { IGenerateId } from "../../business/ports";

export class GenerateIdMock implements IGenerateId {
    generate = jest.fn();
};