// Generators

// Generators break the typical 'run-to-complete-task' model for functions.
// 'run-to-complete-task' functions have to be waited until finishing its task.

// Generators can pause and continue with yield and next() methods.
// With generators we can construct controlled-flow functions and iterators.

function* letterMaker() {
    yield 'a';
    yield 'b';
    yield 'c';
}

let letterGen = letterMaker();

console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);