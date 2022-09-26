// CREATING CLASS
class Account {
  readonly id: number;
  owner: string;
  balance: number; //properties need to be initialize (create a constructor)
  nickname?: string; // Optional

  constructor(id: number, owner: string, balance: number) {
    //this represents current class and shows the id, owner & balance properties
    this.id = id; //initialization of properties
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    //defining a function but it's a METHOD because it is inside the CLASS
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
}

// CREATING OBJECT
let account = new Account(1, 'Mosh', 0); // passing values for the 3 props
account.deposit(100);
console.log(account.balance); // 100
// console.log(account); // Account { id: 1, owner: 'Mosh', balance: 100 }
// console.log(typeof account); // object
// console.log(account instanceof Account); // a boolean exp that produces boolen value --true (NOTE: dealing with CUSTOM OBJECT use instanceof instead of typeof)


