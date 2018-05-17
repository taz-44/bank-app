import {Account} from "../common/interfaces/Account";
import {Transaction} from "../common/interfaces/Transaction";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";

export class BankAccount implements Account{
    //account
    balance: number; //account balance
    accountHistory: Transaction[] = [];
    accountHolderBirthDate: Date;
    interestRate: number; //monthly interest rate.
    currentDate: Date;

    constructor(public startDate : Date){
        this.currentDate = startDate;

    }

    advanceDate(numberOfDays: number) {

        let today = this.currentDate;
        console.log("days to advance " + numberOfDays);
        console.log("the starting balance is "+this.balance);
        console.log("the date is "+today);
        for(let i = 0; i < numberOfDays; i++){

            if(today.getDate() === 1){

                let monthlyInterest: number = Number((this.balance * (this.interestRate / 12)));
                this.depositMoney(Number(monthlyInterest.toFixed(2)), "Interest Earned", this.currentDate);
                console.log("the day is " + this.currentDate + "/////////////////////////");
                console.log("the balance is " + this.balance + "/////////////////////////");

            }

            today.setDate(today.getDate() + 1);
        }
        console.log(this.accountHistory);
    }

    depositMoney(amount: number, description: string, date?: Date): Transaction {
        this.balance += amount;

        let deposit = {
            success: true,
            amount: amount,
            resultBalance: this.balance,
            transactionDate: date || this.currentDate,
            description: description,
            errorMessage: ""
        };
        this.accountHistory.push(deposit);
        return deposit;
    }

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {

        let withdraw: Transaction;

        if(amount > this.balance){
             withdraw = {
                success: false,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                description: description,
                errorMessage: "You don't have enough money!"
            };
            this.accountHistory.push(withdraw);
            return withdraw;
        }else {

            this.balance -= amount;

             withdraw = {
                success: true,
                amount: amount,
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                description: description,
                errorMessage: ""

            };
            this.accountHistory.push(withdraw);
            return withdraw;
        }

    }


}