export class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(
        description: string,
        value: number,
        date: string
    ){
        this.description = description,
        this.value = value,
        this.date = date
    };

    getDescripton(){
        return this.description;
    };

    getValue(){
        return this.value;
    };

    getDate(){
        return this.date;
    };
};

export const newTransaction = new Transaction(
    "Corte de cabelo",
    20,
    "2022-05-10"
);