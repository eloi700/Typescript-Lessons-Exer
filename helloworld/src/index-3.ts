// GENERIC CLASSES
// Example-1
class KeyValuePairs<T, U> {
  //key, value
  constructor(public key: T, public value: U) {}
}
let pair = new KeyValuePairs(125, "a"); // no need to specify the type as compiler will automatically infer on it.

// Example-2: Stack class called Stack<T>
class Stack<T> {
  private elements: T[] = [];

  constructor(private size: number) {}
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  isFull(): boolean {
    return this.elements.length === this.size;
  }
  push(element: T): void {
    if (this.elements.length === this.size) {
      throw new Error("The stack is overflow!");
    }
    this.elements.push(element);
  }
  pop(): T {
    if (this.elements.length == 0) {
      throw new Error("The stack is empty!");
    }
    return this.elements.pop() as T;
  }
}

let numbers = new Stack<number>(3); // number of stacks <number> gen template

while (!numbers.isFull()) {
  let n = randBetween(1, 20);
  numbers.push(n);
  console.log(`Push ${n} into the stack.`);
}

function randBetween(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

// OUTPUT:
// Push 1 into the stack.
// Push 18 into the stack.
// Push 10 into the stack.

// Similarly, you can create a Stack of Strings. <string> -generic template
let words = "The quick brown fox jumps over the lazy dog".split(" ");

let wordStack = new Stack<string>(words.length);

// push words into the stack
words.forEach((word) => wordStack.push(word));

// pop words from the stack
while (!wordStack.isEmpty()) {
  console.log(wordStack.pop());
}

// OUTPUT
// dog
// lazy
// the
// over
// ...

// GENERIC FUNCTIONS
//  Example-1:
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let numbers1 = ArrayUtils.wrapInArray(1);

// Example-2:
function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

// let arrayItems = [1, 5, 7, 4, 2, 9];
// let randomEle = getRandomElement<number>(arrayItems);//from function
// console.log(randomEle); // 9

// Alternatively, without passing the number type <number> explicitly, the TS Compiler will just look at the argument and sets T to its type. It is called type inference for the argument.

let arrayItems = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement(arrayItems);
console.log(randomEle); // 5

// GENERIC FUNCTIONS WITH MULTIPLE TYPES
let result = merge(
  //key value pairs
  { name: "John" },
  { jobTitle: "Frontend Developer" }
);

console.log(result); //{ name: 'John', jobTitle: 'Frontend Developer' }

function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}

// GENERIC INTERFACES

// Example-1:
/** API END POINTS
 *  http://mywebsite.com/users --- getting the list of Users
 *  http://mywebsite.com/products --- getting the list of Products
 **/
interface Result<T> {
  data: T | null;
  error: string | null;
}
// Define a function for calling api end point
// function fetch(url: string): Result<T> {
//   return { data: null, error: null };
// }

interface User {
  username: string;
}

interface Product {
  title: string;
}

// let result = fetch<Product>('url');
// result.data.

// Example-2: Generic Interface Describes OBJ PROPERTIES
interface Pair<K, V> { // Key Value Pairs
  key: K;
  value: V;
}
//Use the Pair interface for defining any key/value with any type.
let month: Pair<string, number> = {
  key: "Jan",
  value: 10,
};

console.log(month); //{ key: 'Jan', value: 10 }
console.log(typeof month); //object

// Example-3: Generic Interface Describes METHODS
// Declares a Generic Interface with 2 Methods - add() and remove()
interface Collection<T> {
  add(o: T): void;
  remove(o: T): void;
}
// Create List<T> GEN Class that implements the Collection<T> GEN Interface
class List<T> implements Collection<T> {
  private items: T[] = [];

  add(o: T): void {
    this.items.push(o);
  }

  remove(o: T): void {
    let index = this.items.indexOf(o);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
// Use List<T> GEN Class to create a list of numbers
let list = new List<number>();
for (let i = 0; i < 5; i++){
    list.add(i)
}

console.log(list);
/*-------*OUTPUT*------
List { items: [0, 1, 2, 3, 4]}
 *--------------------*/
console.log(typeof list); // object

// Example-4: Generic Interface Describes INDEX TYPES
interface Options<T> {
    [name: string]: T
}

let inputOptions: Options<boolean> = { //Types (Boolean)
    'disabled': false,
    'visible': true
};

// GENERIC CONSTRAINTS
// Example-1: Constraints to Object Only
function merging<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let people = merge(
    { name: 'John' },
    { age: 25 },
);

console.log(people); //{ name: 'John', age: 25 }

// Example-2 (CONSTRAINTS into NUMBER | STRING)
function echo<T extends number | string>(value: T): T{
    return value;
}
// echo(True) // Error since it is Boolean
echo(5) // OK - number
echo("Boom")// OK - string

// Example-2 (CONSTRAINTS by the SHAPE OF AN OBJECT)
function echo101<T extends {name: string}>(value: T): T{
    return value;
}
echo101({name: "John"});// OK - Obj with Name Property & String
// echo1({name: 50}); // Error - Expected Type of the Property is String

// Example-3 (CONSTRAINTS by INTERFACE)
interface Person101{
    name: string;
}

function echo102<T extends Person101>(value: T): T{
    return value;
}

echo102({name: "Jane"})

// Example-4 (CONSTRAINTS by CLASS)
class Person102{
    constructor(public name: string){}
}

class Customer extends Person102 {}

function echo103<T extends Person102>(value: T): T{
    return value;
}

echo103(new Person102('Philip'));
echo103(new Customer('Anna'));

// EXTENDING GENERIC CLASSES
interface Product101{
    name: string;
    price: number;
}

