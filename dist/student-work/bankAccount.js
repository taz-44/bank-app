"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(startDate) {
        this.startDate = startDate;
        this.accountHistory = [];
        this.currentDate = startDate;
    }
    advanceDate(numberOfDays) {
        let today = this.currentDate;
        console.log("days to advance " + numberOfDays);
        console.log("the starting balance is " + this.balance);
        console.log("the date is " + today);
        for (let i = 0; i < numberOfDays; i++) {
            if (today.getDate() === 1) {
                let monthlyInterest = Number((this.balance * (this.interestRate / 12)));
                this.depositMoney(Number(monthlyInterest.toFixed(2)), "Interest Earned", this.currentDate);
                console.log("the day is " + this.currentDate + "/////////////////////////");
                console.log("the balance is " + this.balance + "/////////////////////////");
            }
            today.setDate(today.getDate() + 1);
        }
        console.log(this.accountHistory);
    }
    depositMoney(amount, description, date) {
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
    withdrawMoney(amount, description, transactionOrigin) {
        let withdraw;
        if (amount > this.balance) {
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
        }
        else {
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
exports.BankAccount = BankAccount;
//# sourceMappingURL=BankAccount.js.map