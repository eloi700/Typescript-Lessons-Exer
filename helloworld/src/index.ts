// console.log('Hello World');
// let age: number = 20; // var age = 20
// if (age < 50)
//     age += 10;
//     console.log(age);

//Built-in Types in typescript
/**------ANY------------******/
// let sales = 123_456_7;
// let course = 'Typescript';
// let is_published = true;
// let level; // typescript assumes that it is ANY type

/**------ARRAYS------------******/
// let numbers = [1,2,3];
// An empty array must be explicitly apply a type annotation
// let numbers1: number[] = [];
// IntelliSense
// numbers1.forEach(n => n) //DOT(.) after n shows the extension name for number

/**------TUPLES------------******/
// It is a fixed length array where each element has a particular type - often use when working with a pair of values. For example, representing 2 variables 1, 'mosh'
// let user: [number, string] = [1, 'mosh'];
//allowed only for exact representation of type
// user.push(1); // having problems in tuples
// Restrict tuples for only 2 values

/**------ENUMS------------******/
// It represents a list of related constants.
// const small = 1;
// const medium = 2;
// const large = 3;
//  Another representation of Group of Constants is using ENUM
//  PascalCase Naming System
// enum Size {Small = 1, Medium, Large}
// it will auto gen by the compiler for the Medium and Large
// enum Size {Small = 's', Medium = 'm', Large='l'} // must be explicitly specify if it is a string

// const enum Size {Small = 1, Medium, Large};
// let mySize: Size = Size.Medium;
// console.log(mySize);
// compilation in js is verbose -long. However, if it is declared as CONST the compilation is in optimum code ex. CONST ENUM SIZE

/**---------FUNCTIONS------------**/
// function calculateTax(income: number):number{//or VOID if not to return any
// if (income < 50_000)
//     return income * 1.2;
// JS always returned UNDEFINED and it is NOT a number
// return income * 1.3;
// }

//-------FUNCTIIONS w/ OPTIONAL TAXYEAR
// function calculateTax(income: number, taxYear = 2022):number{
//     if (taxYear < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }

// calculateTax(10_000, 2023)

/**---------OBJECTS - A MESSY EXAMPLE------------**/
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Mosh",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
//  Readonly modifier to prevent modifying the value
//  Identify a function or more accurately method in the object - in type annotation of retire method, have to define the signature of this method but it will specify how many parameters, what is the type of the parameter and what is the type of the return value

/**---------OBJECTS IN CLEAN STRUCTURE------------**/

/**---------ADVANCE BUILT-IN TYPES----------------**/

// ---------ALIASE Type
// It can be used in different places. Naming convension PascalCase.
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "Mosh",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// ---------UNION Type ( | )
//  We can give a variable or a function parameter more than one type
// function kgToLbs(weight: number | string) : number {
    //  Narrowing (Narrowing the Union Type into specific type)
    // if(typeof weight === 'number')
    //     return weight * 2.2;
    // else
        // return parseInt(weight)*2.2; or
        // return +weight * 2.2;
// }

// kgToLbs(10);
// kgToLbs("10kg");

// ---------INTERSECTION Type ( & ) - combining of types
// type Draggable = {
//     drag: () => void
// };

// type Resizable = {
//     resize: () => void
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }

// ---------LITERAL Type - limiting the values assign to a variable
// the value 50 or 100 only (literal means exact or specific value)
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'inch';
// let metric: Metric = 'cm';

// ---------NULLIBLE Type - Note: null & undefined values are common source of bugs
// TS Compiler stops from using null or undefined values (underlined) - Error ts(2345) Argument of type 'null' is not assignable to parameter of type 'string'
// tsconfig.json file - strictNullChecks: TRUE (type Checking) - DON'T turn ON
// function greet(name: string | null | undefined){
//     if(name)
//         console.log(name.toUpperCase());
//     else
//         console.log('Hola!');

// }
// greet(null); //OR
// greet(undefined)

// ---------OPTIONAL CHAINING - knowledge checking
// (?. operator) - Optional Property Access Operator
// (?. operator) - Optional Element Access Operator (when dealing with ARRAYS)
// type Customer = {
//     birthday?: Date // let's say birthday property is optional
// };

// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : {birthday: new Date()};
// }

// let customer = getCustomer(1);
// if(customer !== null && customer !== undefined) - remove and use
// Optional Property Access Operator (?.)

// console.log(customer?.birthday);
// console.log(customer?.birthday?.getFullYear()); // Printing the FullYear of birthday

//  Optional Element Access Operator (?.)
//  customers?.[0]

// Optional Call Operator (?.)
// let log: any = (message: string) => console.log(message); OR
// let log: any = null;
// log?.('a'); // since the value must be null & to be optional add (?.)

// ---------NULLISH COALESCING (MERGE/FUSE) OPERATOR (??) - come together to form one mass/whole. It is a logical operator that RETURNS its RIGHT-HAND side operand when its LEFT-HAND side operand is NULL or UNDEFINED, and OTHERWISE returns its left-hand side operand.

//Example - JS
// const foo = null ?? 'default string';
// console.log(foo);
// expected output: "default string"

// const baz = 0 ?? 42;
// console.log(baz);
// expected output: 0

// Example TS
// let speed: number | null = null; // user didn't provide value for speed
// let ride = {
    // Falsy in JS (undefined, null, '', 0, false)
    // speed: speed || 30 // In JS-speed is truthy use speed otherwise 30
    // speed: speed !== null ? speed : 30
    // In Typescript -- Nullish Coalescing Operator (Nullish - Null/Undefined)
//     speed: speed ?? 30 // similar to speed: speed !== null ? speed : 30
// }

// ---------TYPE ASSERTIONS--example: as HTMLInputElement
// let phone = document.getElementById('phone') as HTMLInputElement; --OR
// let phone = <HTMLInputElement> document.getElementById('phone');
    // HTMLElement
    // HTMLInputElement
// phone.value

// ---------THE UNKNOWN TYPE (UNKNOWN - typeof or instaceof)
// function render(document: any){
//     document.move();
//     document.fly();
//     document.whateverWeWant();
// }
// for above as there's no type checking on it the app will crash and so will use UNKNOWN type
// function render(document: unknown){
    // Narrowing
    // if(typeof document === 'string'){
        //typeof only works for PRIMITIVE TYPES like String, Number & Number
    // if(document instanceof WordDocument){
        //instanceof works in CUSTOM Objects created in Classes
//         document.toUpperCase();
//     }
//     document.move();
//     document.fly();
//     document.whateverWeWant();
// }

// ---------THE NEVER TYPE - represents values that NEVER occur.
function processEvents(){
    while(true){
        // Read a message from a queue
    }
}

processEvents();
console.log('Hello World');












