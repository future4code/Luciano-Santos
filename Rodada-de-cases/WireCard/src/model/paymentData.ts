enum PaymentTypes {
    Card = "Credit Card",
    Boleto = "Boleto"
};

export interface Buyer {
    id: string;
    name: string;
    email: string;
    CPF: string;
};

export interface Card {
    id: string;
    buyerID: string;
    cardHolderName?: string;
    cardNumber?: string;
    cardExpirationDate?: string;
    cardCVV?: string
};

export interface Payment {
    id: string;
    buyerID: string;
    amount: number;
    type: PaymentTypes;
};

export interface PaymentData {
    buyer: Buyer;
    payment: Payment;
    card?: Card;
};

export interface PaymentDataInputDTO {
    name: string;
    email: string;
    CPF: string;
    amount: number;
    type: PaymentTypes;
    cardHolderName?: string;
    cardNumber?: string;
    cardExpirationDate?: string;
    cardCVV?: string
};

export interface PaymentDataOutputDTO {
    buyerID: string;
    amount: number;
    type: PaymentTypes;
}