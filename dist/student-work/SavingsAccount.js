"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bankAccount_1 = require("./bankAccount");
class SavingsAccount extends bankAccount_1.BankAccount {
    constructor(currentDate) {
        super(currentDate);
        this.balance = 10000;
        this.interestRate = .02;
    }
    withdrawMoney(amount, description, transactionOrigin) {
        let restrictedTransactions = 0;
        if (transactionOrigin === 1 || transactionOrigin === 2) {
            restrictedTransactions = restrictedTransactions + 1;
            return super.withdrawMoney(amount, description, transactionOrigin);
        }
    }
}
exports.SavingsAccount = SavingsAccount;
//starting balance should be $10,000
//monthly interest rate should be .02 per month
// max of 6 web or phone withdraws in a month
// interest is added at the beginning of each month on the 1st day.
//# sourceMappingURL=SavingsAccount.js.map