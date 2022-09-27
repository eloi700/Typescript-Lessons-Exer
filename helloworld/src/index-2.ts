// CREATING CLASS
class Account {
  readonly id: number;
  owner: string;
  private _balance: number; //properties need to be initialize (create a constructor)
  nickname?: string; // Optional

  constructor(id: number, owner: string, balance: number) {
    //this represents current class and shows the id, owner & balance properties
    this.id = id; //initialization of properties
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    //method to update balance
    //defining a function but it's a METHOD because it is inside the CLASS
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  //Note: It is STILL inside of the Class Account - Declaring balance variable as PRIVATE
  getBalance(): number {
    return this._balance;
  }
}

// CREATING OBJECT
let account = new Account(1, "Mosh", 180); // passing values for the 3 props
account.deposit(500);
console.log(account.getBalance()); // 680

// console.log(account.balance); // 100
// console.log(account); // Account { id: 1, owner: 'Mosh', balance: 100 }
// console.log(typeof account); // object

// console.log(account instanceof Account); // a boolean exp that produces boolen value --true (NOTE: dealing with CUSTOM OBJECT use instanceof instead of typeof)

// ACCESS MODIFIERS IN TYPESCRIPT (PUBLIC, PRIVATE, PROTECTED)
class Employee {
  public empName: string;
  protected empCode: number;

  constructor(name: string, code: number) {
    this.empName = name;
    this.empCode = code;
  }
}

class SalesEmployee extends Employee {
  public department: string;
  //private department: string; // Since it is in PRIVATE, an error will be displayed Unused Locals - ts6133

  constructor(name: string, code: number, department: string) {
    super(name, code);
    this.department = department;
  }
}

let emp = new SalesEmployee("John Smith", 123, "Sales");
// emp.empCode; // Compiler Error - TS2445 (protected)
console.log(emp.empName); // John Smith (public)
console.log(emp.department); // Sales (public)

// PARAMETER PROPERTIES - Reconstructing into more Concise Code (ex. as above)
class AccountOne {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
  getBalance(): number {
    return this._balance;
  }
}
let account1 = new AccountOne(1, "Mosh", 580);
account1.deposit(500);
console.log(account1.getBalance()); // 1080

// GETTERS & SETTERS
class Person {
  constructor(
    private _age: number,
    private _firstName: string,
    private _lastName: string
  ) {}

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 130) { // validation
      throw new Error("The age is invalid");
    }
    this._age = theAge;
  }

  public getFullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}

let person = new Person(20, "Naja", "Kayo");
console.log(person.age);
console.log(person.getFullName());

// Another example for Getters & Setters
class PersonName {
  constructor(
    private _fName: string,
    private _lName?: string,
  ) {};

  public get fullName() {
    return `${this._fName} ${this._lName}`;
  }

  public set fullName(name: string) {
    let parts = name.split(" ");
    if (parts.length != 2) { // validation
      throw new Error("Invalid name format: first last");
    }
    this._fName = parts[0];
    this._lName = parts[1];
  }
}

// let person1 = new PersonName('Nom');// Nom undefined
let person1 = new PersonName('Nom', 'Naja');
console.log(person1.fullName); // Nom Naja


