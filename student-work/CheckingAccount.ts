import {BankAccount} from "./BankAccount";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";

export class CheckingAccount extends BankAccount{

    constructor(currentDate){
        super(currentDate);
        this.balance =  1000;
        this.interestRate = .01;
    }

}

