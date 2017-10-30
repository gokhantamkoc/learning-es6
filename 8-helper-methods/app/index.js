// helper methods
let numbers = [20,30,40]; //let's double these numbers

let double = (num) => {
    return num * 2;
}

let doubled = numbers.map(double);
console.log(doubled);

// You can do the same with below:

doubled = numbers.map((num) => {
    return num * 2;
});

console.log(doubled);

// even shorter version...

doubled = numbers.map(num => num *2);
console.log(doubled);

// Behold the filter helper method

let scores = [7, 16, 21, 4, 3, 22, 5];

// again with arrow function

let highScoreFilter = (point) => {
    return point > 15;
}

let highScores = points.filter(highScoreFilter);
console.log(highScores);

// shorter version
highScores = points.filter((point) => {
    return point > 15;
});
console.log(highScores);

// even shorter version

highScores = points.filter(p => p > 15);
console.log(highScores);