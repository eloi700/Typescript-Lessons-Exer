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


