// CLASS DECORATORS *********************************************************
//single parameter that represents the constructor function and what matters is the type ex. function, the runtime assumes that it will be applied in the class.
//In a function we have a chance to modiy or enhance the class like adding new properties and methods
//Properties - inherits various properties and methods

// function Component(constructor: Function) {
//   console.log("Component Decorator Called");

//   //Methods
//   constructor.prototype.uniqueId = Date.now(); // uniqueId a property
//   constructor.prototype.insertInDOM = () => {
//     console.log("Inserting the component in the DOM");
//   };
// }

// @Component
// class ProfileComponent{}

// PARAMETERIZED DECORATORS (DECORATOR FACTORY)*********************************
type ComponentOptions = {
    selector: string
}

function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component Decorator Called");
    constructor.prototype.options = options; // a property
    constructor.prototype.uniqueId = Date.now(); // uniqueId a property
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

//  Decorator Composition *****************************************************
function Pipe(constructor: Function){
    console.log('pipe decorator called');
    constructor.prototype.pipe = true;
}

@Component({selector: '#my-profile'})
@Pipe
class ProfileComponent {}

//  METHOD DECORATORS *******************************************************
/*  With this method only 1 type of parameter can be used only example:
    descriptor.value = function (message: string) {} - for flexibility -> any and rename message into a generic name and spread operator like ...args.
    NOTE:  redefining Methods always use function expression not a FAT arrow*/
//  Example-1:
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  //any is the type which TSC expects in the target for decorators
  const original = descriptor.value as Function;
  //   descriptor.value = function () {
  descriptor.value = function (...args: any) {
    // using the @Log below
    console.log("Before"); // Before
    // original.call(this, "Blue Sky");// Person says Blue Sky
    original.call(this, ...args); // Person says Hello
    console.log("After"); // After
  };
}

class Person100 {
  @Log
  say(message: string) {
    console.log("Person says " + message);
  }
}

let person100 = new Person100();
person100.say("Hello");

// Example 2
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false) // decorator factory
  greet() {
    return "Hello, " + this.greeting;
  }
}

function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

/*The @enumerable(false) decorator here is a decorator factory. When the @enumerable(false) decorator is called, it modifies the enumerable property of the property descriptor.*/

// ACCESSOR DECORATORS USING GETTERS & SETTERS *******************************
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  // get the reference to the Original Method to the Original Getter
  // Note: descriptor.value only works for Regular Methods not into Getters
  const original = descriptor.get;
  //  Redefine the Getter
  descriptor.get = function () {
    //original will always have a value & will not be null
    const result = original!.call(this);
    // if (original !== null && original !== undefined)
    //     original.call(this) // similar as above original?.call(this)
    return (typeof result === 'string') ? result.toUpperCase() : result
    /* if (typeof result === 'string')
         return result.toUpperCase();
     return result; ----SIMPLIFIED VERSION ABOVE*/
  };
}

class Person200 {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
    // return 123;
    // return null;
  }
}

let person200 = new Person200('eloi', 'tennert');
console.log(person200.fullName); // ELOI TENNERT
// console.log(person200.fullName); // 123
// console.log(person200.fullName); // null

// PROPERTY DECORATORS *****************************************************
// Define a decorator for enhancing a Property
function MinLength(length: number){
    return (target: any, propertyName: string) => {
        let value: string; //if value is valid to store it here
        // property descriptor for TARGET property
        const descriptor: PropertyDescriptor = {
            //Ctrl+space to see the property & methods of descriptor obj.
            get() {return value;}, // to return the value
            set(newValue: string){ // for target property
                if(newValue.length <= length) // data validation
                    throw new Error(`${propertyName} should be at least ${length} characters long.`)
                value = newValue
            }
        };

        Object.defineProperty(target, propertyName, descriptor);
    }
}

class User{
    @MinLength(5)
    password: string;

    constructor(password: string){
        this.password = password;
    }
}

let user = new User('taasnookahitkanino')
console.log(user.password);

// PARAMETER DECORATORS ***************************************************
type WatchedParameter = {
    methodName: string,
    parameterIndex: number
};

// Array for watch parameters
const watchedParameters: WatchedParameter[] = [];

// 3 parameter names in the function
function Watch(target: any, methodName: string, parameterIndex: number){
    //storing object into the array
    watchedParameters.push({
        methodName,
        parameterIndex
    })
}

class Vehicle {
    // @Watch - parameter decorator for watching this parameter
    move(@Watch speed: number){}
}

console.log(watchedParameters);
//[ { methodName: 'move', parameterIndex: 0 } ]


