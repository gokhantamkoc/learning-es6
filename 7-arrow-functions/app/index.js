// arrow functions

// By default arrow functions are anonymous, so arrow functions vanish once it is used.

// conventional function declaration

function cheer() {
    console.log('Woohoo!');
}

cheer();

// The conventional function is not anonymous.

// let's change cheer() function to an anonymous function cheer.
// So we create a cheer variable and assign a function expression.

cheer = function() {
    console.log('Woohoo!');
}

cheer();

setTimeout(function() {
    console.log('Woohoo! (anonymous function)');
}, 3000)

// Like anonymous function definition, let's write a arrow function.

setTimeout(() => {
    console.log('Woohoo! (arrow function)');
}, 4000)

// Let's assign this arrow function a variable and then use it in setTimeout

let cheer2 = () => {
    console.log('Woohoo! (arrow function assigned to variable)')
}

setTimeout(cheer2, 5000);