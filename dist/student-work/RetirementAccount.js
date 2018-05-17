"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
class RetirementAccount extends BankAccount_1.BankAccount {
    constructor() {
        super(new Date());
        this.balance = 100000;
        this.interestRate = .03;
    }
}
exports.RetirementAccount = RetirementAccount;
//# sourceMappingURL=RetirementAccount.js.map