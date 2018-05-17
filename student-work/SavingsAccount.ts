import {BankAccount} from "./bankAccount";

export class SavingsAccount extends BankAccount {
    constructor() {
        super(new Date());
        this.balance = 10000;
        this.interestRate = .02;
    }

}


//starting balance should be $10,000
//monthly interest rate should be .02 per month
// max of 6 web or phone withdraws in a month
// interest is added at the beginning of each month on the 1st day.

