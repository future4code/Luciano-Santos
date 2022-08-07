export type user = {
   id: string
   email: string
   password: string,
   role: string
}

export interface UserInputDTO {
   email: string,
   password: string
}

export interface SignupDTO {
   email: string,
   password: string,
   role: string
}
export interface UserOutputDTO {
   id: string,
   email: string
}

