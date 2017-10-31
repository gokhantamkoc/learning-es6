// Function Factories

// Closures enable to create function factories.

const addSuffix = (suffix) => {
    const concat = (y) => {
        return y + suffix;
    }
    return concat;
}

// We have created a function factory.

let addNess = addSuffix('ness');
console.log(addNess);
let res = addNess('happi');
console.log(res);

// Shorter version of function factory

const product = (x) => {
    return y => {
        return y * x;
    }
}

let triple = product(3);
console.log(triple);
res = triple(12);
console.log(res);

// even shorter version of function factory

const product2 = (x) => {
    return y => y * x;
}

let double = product2(2);
console.log(double);
res = double(45);
console.log(res);

// shortest version of function factory

const product3 = x => y => y * x;

let quad = product3(4);
console.log(quad);
res = quad(100);
console.log(res);
