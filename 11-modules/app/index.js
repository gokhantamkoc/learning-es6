// modules
// They are re-usable pieces of code
// Mostly each of them have their own file.

//Let's access to fellowship array from here

import { fellowship, total } from './fellowship'; 
// Note that if you do not use curly braces here you cannot access fellowship
// import { add, multiply } from './math'; 

import multiply, { add } from './math'; // so now we can import multiply without braces

console.log(fellowship, total);

// The default keyword: defines a fallback expression for our module when it is handling multiple variables.

console.log(add(5, 9));
console.log(multiply(13, 892));