import { Client } from "../Interfaces/Client"
import { Residence } from "./Residence"

export class ResidentialClient extends Residence implements Client{
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private CPF: string,
        residentsQuantity: number,
        cep: string
    ){
        super(residentsQuantity, cep)
    }

    public getCPF(): string{
        return this.CPF
    }

    public calculateBill() :number{
        return this.consumedEnergy * 0.75
    }
};