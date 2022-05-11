import { UserAccount } from "./UserAccount";

export class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]){
        this.accounts = accounts;
    };

    getAccounts(){
        return this.accounts;
    };

    setAccounts(accounts: UserAccount[]){
        this.accounts = accounts;
    };
};