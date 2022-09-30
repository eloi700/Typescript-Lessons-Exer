// CLASS DECORATORS
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

// PARAMETERIZED DECORATORS (DECORATOR FACTORY)
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

//  DECORATOR COMPOSITION
function Pipe(constructor: Function){
    console.log('pipe decorator called');
    constructor.prototype.pipe = true;
}

@Component({selector: '#my-profile'})
@Pipe
class ProfileComponent {}
