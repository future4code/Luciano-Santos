export type User = {
    id: string,
    name: string,
    email: string,
    password: string
};

export interface SignupInputDTO {
    name: string,
    email: string,
    password: string
};
export interface LoginInputDTO {
    email: string,
    password: string
};


export type IdUser = {
    id: string
};

