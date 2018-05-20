"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CheckingAccount_1 = require("../student-work/CheckingAccount");
const SavingsAccount_1 = require("../student-work/SavingsAccount");
const RetirementAccount_1 = require("../student-work/RetirementAccount");
class AccountFactory {
    static getCheckingAccountObject(currentDate) {
        return new CheckingAccount_1.CheckingAccount(currentDate);
    }
    static getSavingsAccountObject(currentDate) {
        return new SavingsAccount_1.SavingsAccount(currentDate);
    }
    static getRetirementAccountObject(currentDate, accountHolderBirthDate) {
        return new RetirementAccount_1.RetirementAccount(currentDate, accountHolderBirthDate);
    }
}
exports.AccountFactory = AccountFactory;
//# sourceMappingURL=AccountFactory.js.map