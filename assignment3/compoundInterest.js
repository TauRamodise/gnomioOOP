class BankAccount {
    constructor(accOwner, type, accNumber, balance, fee, interest) {
        this.accOwner = accOwner;
        this.type = type;
        this.accNumber = accNumber;
        this.fee = fee;
        this.balance = balance;
        this.interest = interest;

    }
    account(deposit, withdrawal, bankFee ){
        this.interest = 12
        bankFee = 50;
        deposit = 15000;
        withdrawal = 800;
        this.balance = 158267

        let accBalance = this.interest * this.balance + deposit - withdrawal - bankFee;
        return accBalance;
        

    }

    accountInformation() {
         let netBalance = this.account()
        return `Account owner ${this.accOwner} has the account type ${this.type},
        with the account number: ${this.accNumber},
        this account has an interest rate of ${this.interest} percent
        currently has a balance of R` + netBalance
    }
}

let personW = new BankAccount('Warona', 'Savings', 45265785215, 12)

console.log(personW.accountInformation());

