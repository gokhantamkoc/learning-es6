// inheriting a class
import Animal from './Animal';

class Lion extends Animal {
    constructor(name, height, color) {
        super(name, height);
        this.color = color;
    }

    hello() {
        console.log(`Hi! I'm ${this.name} from Pride Rock, Serengeti`);
    }
}

let king = new Lion('Mufasa', 4.5);
console.log(king);
king.hello();

let son = new Lion('Simba', 2, 'Golden');
console.log(son);
son.hello();