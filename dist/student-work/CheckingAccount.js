"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
class CheckingAccount extends BankAccount_1.BankAccount {
    constructor() {
        super(new Date());
        this.balance = 1000;
        this.interestRate = .01;
    }
}
exports.CheckingAccount = CheckingAccount;
//# sourceMappingURL=CheckingAccount.js.map