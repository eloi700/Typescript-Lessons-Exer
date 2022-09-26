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
  getBalance(): number{
    return this._balance;
  }
}

// CREATING OBJECT
let account = new Account(1, "Mosh", 180); // passing values for the 3 props
account.deposit(500);
console.log(account.getBalance());

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


