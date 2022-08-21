import { InvalidPrice, InvalidLength } from "../errors/CustomErrors";

export class Products {
    constructor(
        private name: string,
        private price: number,
        private tags: string
    ){
        this.validateStringLength(name, tags);
        this.validatePrice(price)
    };

    validateStringLength(name: string, tags: string){
        if (name.length < 3 || tags.length < 3) throw new InvalidLength();
    };

    validatePrice(price: number){
        if (typeof price !== "number") throw new InvalidPrice();
    };
};