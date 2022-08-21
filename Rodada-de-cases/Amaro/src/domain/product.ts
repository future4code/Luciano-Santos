import { InvalidPrice, InvalidInput, InvalidNameLength } from "../common/CustomErrors";

export class Products {
    constructor(
        private name: string,
        private price: number,
        private tags: string,
        private id?: string
    ){
        this.validateEmptyInput(name, price, tags);
        this.validatePrice(price);
        this.validateNameLength(name);
    };

    validateEmptyInput(name: string, price: number, tags: string) {
        if (!name || !price || !tags) {
            throw new InvalidInput();
        };
    };

    validatePrice(price: number){
        if (price < 0) throw new InvalidPrice();
    };

    validateNameLength(name: string){
        if (name.length > 60) throw new InvalidNameLength();
    };
};