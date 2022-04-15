export type extracted = {
    value: number,
    date: Date,
    description: string
};

export type account = {
    name: string,
    CPF: string,
    birthdate: Date,
    balance: number,
    extracted: extracted[]
};