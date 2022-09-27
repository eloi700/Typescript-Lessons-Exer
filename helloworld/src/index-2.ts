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
  //inheritance
  public department: string;
  //private department: string; // Since it is in PRIVATE, an error will be displayed Unused Locals - ts6133

  constructor(name: string, code: number, department: string) {
    // super calls the constructor of the Employee class.
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
    if (theAge <= 0 || theAge >= 130) {
      // validation
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
  constructor(private _fName: string, private _lName?: string) {}

  public get fullName() {
    return `${this._fName} ${this._lName}`;
  }

  public set fullName(name: string) {
    let parts = name.split(" ");
    if (parts.length != 2) {
      // validation
      throw new Error("Invalid name format: first last");
    }
    this._fName = parts[0];
    this._lName = parts[1];
  }
}

// let person1 = new PersonName('Nom');// Nom undefined
let person1 = new PersonName("Nom", "Naja");
console.log(person1.fullName); // Nom Naja

// INDEX SIGNATURES
// Building a ticketing application for a concert & to know sitting placement
class seatAssignment {
  // A1, A2, ...
  // Index signature property
  [seatNumber: string]: string | number;
}

let seats = new seatAssignment();
seats.A1 = "Devie";
seats["A2"] = 457;
seats.A3 = "John";
console.log(seats.A2);

// STATIC PROPERTIES & METHODS
// To count the number of Employees per Entry
class Employees {
  private static _headcount: number = 0; // set in private so the value is unchangeable. Initialize into 0.

  constructor(
    private _firstName1: string,
    private _lastName1: string,
    private _jobTitle1: string
  ) {
    Employees._headcount++;
  }
  get fullDetails() {
    return `${this._firstName1} ${this._lastName1} ${this._jobTitle1}`;
  }

  // Static Method()
  public static getheadcount() {
    return Employees._headcount;
  }
}

let John = new Employees("John", "Reyes", "Software Developer");
let Peter = new Employees("Peter", "Pan", "Sr. Software Developer");
let Sonia = new Employees("Sonia", "Tan", "Junior Developer");
let Ire = new Employees("Ire", "Mo", "Junior Developer");
console.log(Employees.getheadcount()); // className.staticPropertyName/MethodName

// TYPESCRIPT INHERITANCE
class PersonPassenger {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    // method
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    // method
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

class Passenger extends PersonPassenger {
  constructor(firstName: string, lastName: string, public position: string) {
    super(firstName, lastName);
    this.position = position;
  }
}

let passenger = new Passenger("John", "Smith", "Web Developer");
console.log(passenger.getFullName());
console.log(passenger.describe());

// INHERITANCE - METHOD OVERRIDING
class People {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("Walking");
  }
}

class Student extends People {
  constructor(firstName: string, lastName: string, public idNumber: number) {
    super(firstName, lastName);
  }

  takeTest(){
    console.log('Taking Test');

  }
}
// OVERRIDING below is not REQUIRED instead adding Teacher class
// let student = new Student('Erika', 'Schneider', 250)
// console.log(student);

class Teacher extends People{
     override get fullName() {
        return `Professor ${super.fullName}`
      }
}

let teacher = new Teacher('Mira', 'Obst')
console.log(teacher.fullName);// fullName is from People class



