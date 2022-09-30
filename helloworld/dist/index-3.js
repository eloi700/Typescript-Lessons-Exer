"use strict";
class KeyValuePairs {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePairs(125, "a");
class Stack {
    constructor(size) {
        this.size = size;
        this.elements = [];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    isFull() {
        return this.elements.length === this.size;
    }
    push(element) {
        if (this.elements.length === this.size) {
            throw new Error("The stack is overflow!");
        }
        this.elements.push(element);
    }
    pop() {
        if (this.elements.length == 0) {
            throw new Error("The stack is empty!");
        }
        return this.elements.pop();
    }
}
let numbers = new Stack(3);
while (!numbers.isFull()) {
    let n = randBetween(1, 20);
    numbers.push(n);
    console.log(`Push ${n} into the stack.`);
}
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
let words = "The quick brown fox jumps over the lazy dog".split(" ");
let wordStack = new Stack(words.length);
words.forEach((word) => wordStack.push(word));
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numbers1 = ArrayUtils.wrapInArray(1);
function getRandomElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let arrayItems = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement(arrayItems);
console.log(randomEle);
let result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });
console.log(result);
function merge(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
let month = {
    key: "Jan",
    value: 10,
};
console.log(month);
console.log(typeof month);
class List {
    constructor() {
        this.items = [];
    }
    add(o) {
        this.items.push(o);
    }
    remove(o) {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}
let list = new List();
for (let i = 0; i < 5; i++) {
    list.add(i);
}
console.log(list);
console.log(typeof list);
let inputOptions = {
    'disabled': false,
    'visible': true
};
function merging(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
let people = merge({ name: 'John' }, { age: 25 });
console.log(people);
function echo(value) {
    return value;
}
echo(5);
echo("Boom");
function echo101(value) {
    return value;
}
echo101({ name: "John" });
function echo102(value) {
    return value;
}
echo102({ name: "Jane" });
class Person102 {
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Person102 {
}
function echo103(value) {
    return value;
}
echo103(new Person102('Philip'));
echo103(new Customer('Anna'));
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
let store = new Store();
store.add({ name: 'a', price: 1 });
store.find('name', 'a');
store.find('price', 1);
class CompressibleStore extends Store {
    compress() { }
}
class SearchableStore extends Store {
    findName(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
class ProductStore extends Store {
}
let product200 = {
    prodName: 'a',
    prodPrice: 1
};
//# sourceMappingURL=index-3.js.map