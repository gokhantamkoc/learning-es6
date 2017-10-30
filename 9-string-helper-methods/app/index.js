// string helper methods

// the repeat method

let b = "wooh" + "oo".repeat(50);
console.log(b);

//let's do it with template string

let c = 'woof ';
let dog = `the dog barks: ${c.repeat(3)}`;
console.log(dog);

// the power of startsWith, endsWith and includes

let train = 'Shinkansen';
let strStartsWithFound = train.startsWith('Shin');
console.log(strStartsWithFound);
let strIncludesFound = train.includes('kan');
console.log(strIncludesFound);
let strEndsWithFound = train.endsWith('en');
console.log(strEndsWithFound);