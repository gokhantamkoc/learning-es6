// let is same with var in terms of SYNTAX.
// let is different from var in terms of SCOPE.

// block scoping => Local scope variable will not overwrite Global scope variable which has the same name.

var numberOfTomatos = 20

{
    let numberOfTomatos = 30;
    console.log(numberOfTomatos);
}

console.log(numberOfTomatos);

// block scoping does not work on var

var numberOfPotatos = 13;

{
    var numberOfPotatos = 19;
    console.log(numberOfPotatos);
}

console.log(numberOfPotatos);

// block scoping does work on let and const

let numberOfOnions = 3;

{
    let numberOfOnions = 8;
    console.log(numberOfOnions);
}

console.log(numberOfOnions);

const grocerer = 1;

{
    const grocerer = 3;
    console.log(grocerer);
}

console.log(grocerer);