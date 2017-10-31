// Promises

// Synchronous(SYNC) vs Asynchronous(ASYNC) Programming

// SYNC programming refers to programs that run sequentially, 
// from top to bottom, that may or may not encounter blocking operations that affect the run time.

// ASYNC programming refers to programs that run on a looped 
// operation and divert blocking operations to handlers in order maintain the run time.

// Why ASYNC programming is needed?

// User interfaces and Web Browser are ASYNC in nature.
// UI and browsers handle events such as button click and mouse moves.

// Promises handle ASYNC functions in ES6
// Promises has three states PENDING, FULFILLED and REJECTED

// let's make a Promise that resolves data
let p = new Promise((resolve, reject) => {
    resolve('Resolve PROMISE DATA');
});
p.then(response => {
    console.log(response);
})

// let's make a Promise that rejects data
let p2 = new Promise((resolve, reject) => {
    reject('Rejected PROMISE DATA');
});
p2.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});

// let's emulate a api call using setTimeout

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Rejected PROMISE DATA'), 3000);
});
p3.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});

console.log("This will appear before emulated api call");
