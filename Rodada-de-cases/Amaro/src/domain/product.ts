import { InvalidInput, InvalidNameLength, InvalidInputPrice, InvalidTypePrice } from "../common/CustomErrors";

export class Products {
    constructor(
        private name: string,
        private price: number,
        private tags: string,
        private id?: string
    ){
        this.validateEmptyInput(name, price, tags);
        this.validateInputPrice(price);
        this.validateTypePrice(price);
        this.validateNameLength(name);
    };

    validateEmptyInput(name: string, price: number, tags: string) {
        if (!name || !price || !tags) {
            throw new InvalidInput();
        };
    };

    validateInputPrice(price: number){
        if (price < 0) throw new InvalidInputPrice();
    };

    validateTypePrice(price: number){
        if (typeof price !== "number") throw new InvalidTypePrice();
    };

    validateNameLength(name: string){
        if (name.length > 60) throw new InvalidNameLength();
    };
};