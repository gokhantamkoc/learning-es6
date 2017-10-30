// prototypes vs classes

// JS is Object-Oriented and using prototypal inheritance model. It is not like Java or Ruby.
// classes are extractions on top of JS prototypes.
// Every object has a prototype and inherits methods and properties from parent's prototype. 
// So it is a chain of prototype.
// A prototype reveals an object's parent.

function Wizard(name, house, pet) {
    // the function keyword here is not used create a real function
    // it achieves some logical expression
    this.name = name;
    this.house = house;
    this.pet = pet;

    this.greet = () => `I'm ${this.name} from ${this.house}`
}

let harryPotter = new Wizard('Harry Potter', 'Hogwarts', 'Owl');
console.log(harryPotter);
console.log(harryPotter.greet());

// let's add a variable to Wizard Prototype.

Wizard.prototype.petName;
harryPotter.petName = "Hedwig";
console.log(harryPotter);

// let's add a method to Wizard Prototype.
/*

Wizard.prototype.info = () => {
    return `I have a(n) ${this.pet} and its name is ${this.petName}.`;
}

Here, the arrow function for info will not create a function for Wizard Prototype.
So we will use function declaration in order to solve this problem.
*/

Wizard.prototype.info = function() {
    return `I have a(n) ${this.pet} and its name is ${this.petName}.`;
}

console.log(harryPotter.info());

//Prototypes are simply functions.
