import { v4 as ID } from "uuid";

export type typeProducts = {
    id: string,
    name: string,
    price: number
};

export const products: typeProducts[] = [
    {
        id: ID(),
        name: "mouse",
        price: 19.99
    },
    {
        id: ID(),
        name: "teclado",
        price: 59.99
    },
    {
        id: ID(),
        name: "monitor",
        price: 1499.99
    },
    {
        id: ID(),
        name: "processador",
        price: 1599.99
    },
    {
        id: ID(),
        name: "placa de vídeo",
        price: 3500
    }
];
