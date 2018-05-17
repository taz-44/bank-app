import {BankAccount} from "./BankAccount";

export class RetirementAccount extends BankAccount {

    constructor() {
        super(new Date());
        this.balance =  100000;
        this.interestRate = .03;

    }

    //withdraws made by account holder under the age of 60 get a 10% fee
    //starting balance should be $100,000
    //monthly interest rate should be .03 per month
    // max of 6 web or phone withdraws in a month
    // interest is added at the beginning of each month on the 1st day.
}