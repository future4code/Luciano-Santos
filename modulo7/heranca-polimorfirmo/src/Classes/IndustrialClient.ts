import { Client } from "../Interfaces/Client";
import { Industry } from "./Industry";

export class IndustrialClient extends Industry implements Client{
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private registerNumber: number,
        machinesQuantity: number,
        cep: string
    ){
        super(machinesQuantity, cep)
    }

    getRegisterNumber(): number{
        return this.registerNumber
    }

    calculateBill(): number {
        return (this.consumedEnergy * 0.45 + (this.machinesQuantity * 100))
    }
}