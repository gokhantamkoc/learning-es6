//Spread operator ...

let set1 = ['b', 'c', 'd'];
let set2 = ['a', ...set1, 'e'];

console.log(set1);
console.log(set2);

// like its meaning set1 spread inside set2.

// set1 interpolates between the first element of set2 and last element of set2

// using spead operator with a function

function collect(...a) {
    console.log(a);
}

collect(set2);