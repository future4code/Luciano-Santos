import { Client } from "../Interfaces/Client";
import { Commerce } from "./Commerce";

export class CommercialClient extends Commerce implements Client{
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private CNPJ: string,
        floorsQuantity: number,
        cep: string
    ){
        super(floorsQuantity, cep)
    }
    
    getCNPJ(): string{
        return this.CNPJ
    }

    calculateBill():number{
        return this.consumedEnergy * 0.53
    }
}