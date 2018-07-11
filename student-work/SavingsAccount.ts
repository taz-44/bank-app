import {BankAccount} from "./bankAccount";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";
import {Transaction} from "../common/interfaces/Transaction";

export class SavingsAccount extends BankAccount {


    constructor(currentDate) {
        super(currentDate);
        this.balance = 10000;
        this.interestRate = .02;


        }

    //
    // withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
    //     let restrictedTransactions = 0;
    //
    //     if(transactionOrigin === 1 ||transactionOrigin === 2) {
    //         restrictedTransactions = restrictedTransactions + 1;
    //         return super.withdrawMoney(amount, description, transactionOrigin);
    //     }
    //
    // }

}


//starting balance should be $10,000
//monthly interest rate should be .02 per month
// max of 6 web or phone withdraws in a month
// interest is added at the beginning of each month on the 1st day.

