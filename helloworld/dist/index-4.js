"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Component(options) {
    return (constructor) => {
        console.log("Component Decorator Called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("Inserting the component in the DOM");
        };
    };
}
function Pipe(constructor) {
    console.log('pipe decorator called');
    constructor.prototype.pipe = true;
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ selector: '#my-profile' }),
    Pipe
], ProfileComponent);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
class Person100 {
    say(message) {
        console.log("Person says " + message);
    }
}
__decorate([
    Log
], Person100.prototype, "say", null);
let person100 = new Person100();
person100.say("Hello");
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original.call(this);
        return (typeof result === 'string') ? result.toUpperCase() : result;
    };
}
class Person200 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Person200.prototype, "fullName", null);
let person200 = new Person200('eloi', 'tennert');
console.log(person200.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() { return value; },
            set(newValue) {
                if (newValue.length <= length)
                    throw new Error(`${propertyName} should be at least ${length} characters long.`);
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(5)
], User.prototype, "password", void 0);
let user = new User('taasnookahitkanino');
console.log(user.password);
const watchedParameters = [];
function Watch(target, methodName, parameterIndex) {
    watchedParameters.push({
        methodName,
        parameterIndex
    });
}
class Vehicle {
    move(speed) { }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
console.log(watchedParameters);
//# sourceMappingURL=index-4.js.map