import { Transaction } from "./Transaction";
import { newTransaction } from "./Transaction";

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [newTransaction];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    };

    getCpf(){
        return this.cpf;
    };

    getName(){
        return this.name;
    };

    getAge(){
        return this.age
    };
    
    getBalance(){
        return this.balance;
    };

    getTransaction(){
        return this.transactions;
    };
};