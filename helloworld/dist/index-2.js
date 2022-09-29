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
let person1 = new PersonName("Nom", "Naja");
console.log(person1.fullName);
class seatAssignment {
}
let seats = new seatAssignment();
seats.A1 = "Devie";
seats["A2"] = 457;
seats.A3 = "John";
console.log(seats.A2);
class Employees {
    constructor(_firstName1, _lastName1, _jobTitle1) {
        this._firstName1 = _firstName1;
        this._lastName1 = _lastName1;
        this._jobTitle1 = _jobTitle1;
        Employees._headcount++;
    }
    get fullDetails() {
        return `${this._firstName1} ${this._lastName1} ${this._jobTitle1}`;
    }
    static getheadcount() {
        return Employees._headcount;
    }
}
Employees._headcount = 0;
let John = new Employees("John", "Reyes", "Software Developer");
let Peter = new Employees("Peter", "Pan", "Sr. Software Developer");
let Sonia = new Employees("Sonia", "Tan", "Junior Developer");
let Ire = new Employees("Ire", "Mo", "Junior Developer");
console.log(Employees.getheadcount());
class PersonPassenger {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    describe() {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
class Passenger extends PersonPassenger {
    constructor(firstName, lastName, position) {
        super(firstName, lastName);
        this.position = position;
        this.position = position;
    }
}
let passenger = new Passenger("John", "Smith", "Web Developer");
console.log(passenger.getFullName());
console.log(passenger.describe());
class People {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends People {
    constructor(firstName, lastName, idNumber) {
        super(firstName, lastName);
        this.idNumber = idNumber;
    }
    takeTest() {
        this.walk();
        console.log("Taking Test");
    }
}
class Teacher extends People {
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
class Principal extends People {
    get fullName() {
        return `Principal ${super.fullName}`;
    }
}
printNames([
    new Student("John", "Schneider", 101),
    new Teacher("Tom", "Roladen"),
    new Principal("Jerry", "Braten"),
]);
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
class Animal {
    makeSound() {
        console.log("ANIMALS SOUND");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("BARK");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("MEOW");
    }
}
function makeAnimalSound(animal) {
    animal.makeSound();
}
let animal = new Animal();
makeAnimalSound(animal);
let animalFirst = new Dog();
makeAnimalSound(animalFirst);
let animalSecond = new Cat();
makeAnimalSound(animalSecond);
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle");
    }
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
class Control {
}
class Button extends Control {
    enable() { }
}
class TextBox extends Control {
    enable() { }
}
class Label extends Control {
}
//# sourceMappingURL=index-2.js.map