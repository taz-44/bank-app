"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
class CheckingAccount extends BankAccount_1.BankAccount {
    constructor(currentDate) {
        super(currentDate);
        this.balance = 1000;
        this.interestRate = .01;
    }
}
exports.CheckingAccount = CheckingAccount;
//# sourceMappingURL=CheckingAccount.js.map