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
class AccountOne {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
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
let account1 = new AccountOne(1, "Mosh", 580);
account1.deposit(500);
console.log(account1.getBalance());
class Person {
    constructor(_age, _firstName, _lastName) {
        this._age = _age;
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get age() {
        return this._age;
    }
    set age(theAge) {
        if (theAge <= 0 || theAge >= 130) {
            throw new Error("The age is invalid");
        }
        this._age = theAge;
    }
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}
let person = new Person(20, "Naja", "Kayo");
console.log(person.age);
console.log(person.getFullName());
class PersonName {
    constructor(_fName, _lName) {
        this._fName = _fName;
        this._lName = _lName;
    }
    ;
    get fullName() {
        return `${this._fName} ${this._lName}`;
    }
    set fullName(name) {
        let parts = name.split(" ");
        if (parts.length != 2) {
            throw new Error("Invalid name format: first last");
        }
        this._fName = parts[0];
        this._lName = parts[1];
    }
}
let person1 = new PersonName('Nom', 'Naja');
console.log(person1.fullName);
//# sourceMappingURL=index-2.js.map