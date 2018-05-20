"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
class RetirementAccount extends BankAccount_1.BankAccount {
    constructor(currentDate, accountHolderBirthDate) {
        super(currentDate);
        this.balance = 100000;
        this.interestRate = .03;
        this.accountHolderBirthDate = accountHolderBirthDate;
    }
}
exports.RetirementAccount = RetirementAccount;
//# sourceMappingURL=RetirementAccount.js.map