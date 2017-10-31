// CLOSURES

// Closures refer to functions that remember the environment and 
// can reference independent variables within that environment.

// CLOSURES enable to create function factories.
// Closure enable private data.

// let call = () => {
//     let secret = 'ES6 rocks!'
// }
// secret is not defined in global scope. the below code will raise an 'is not defined' error.
// console.log(secret);

// But we can acces that data if the call function closure has a method which reveals the data.

let call = () => {
    let secret = 'ES6 rocks!'

    let reveal = () => {
        console.log(secret);
    } 

    // the inner function is accessing a variable from parent scope
    // this is called LEXICAL SCOPING. LEXICAL SCOPING is the idea that 
    // programs keep track of variable locations to understand where to access them 

    reveal();
}
call();

// Let's dive deep within LEXICAL SCOPING.

let closureFunction = () => {
    let privateData = 'ES6 is awesome!';

    let accessFromGlobal = () => {
        console.log(privateData);
    }

    return accessFromGlobal;
}

let openTheInnerFunction = closureFunction();
openTheInnerFunction();
