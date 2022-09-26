"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, "Mosh", 180);
account.deposit(500);
console.log(account.getBalance());
class Employee {
    constructor(name, code) {
        this.empName = name;
        this.empCode = code;
    }
}
class SalesEmployee extends Employee {
    constructor(name, code, department) {
        super(name, code);
        this.department = department;
    }
}
let emp = new SalesEmployee("John Smith", 123, "Sales");
console.log(emp.empName);
console.log(emp.department);
//# sourceMappingURL=index-2.js.map