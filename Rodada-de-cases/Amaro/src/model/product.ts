export interface Product {
    id: string;
    name: string;
    price: number;
    tags: string;
};

export interface ProductInputDTO {
    name: string;
    price: number;
    tags: string;
};
