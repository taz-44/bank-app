import {Account} from "../common/interfaces/Account";
import {CheckingAccount} from "../student-work/CheckingAccount";
import {SavingsAccount} from "../student-work/SavingsAccount";
import {RetirementAccount} from "../student-work/RetirementAccount";

export class AccountFactory {

    static getCheckingAccountObject(currentDate: Date): Account {
        return new CheckingAccount();
    }

    static getSavingsAccountObject(currentDate: Date): Account {
        return new SavingsAccount();
    }

    static getRetirementAccountObject(currentDate: Date, accountHolderBirthDate: Date): Account {
        return new RetirementAccount();
    }

}