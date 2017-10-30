// number helper methods

// isFinite method
// It checks if the given number is a finite number.

const addToCart = (item, number) => {
    return Number.isFinite(number);
}

console.log(addToCart('Sucker', 10)); // true

console.log(addToCart('Sucker', Infinity)); //false

console.log(addToCart('Sucker', Math.pow(2, 54))); // The number here is finite so result is true, but is too large for JavaScript.

// isSafeInteger helper method.
// It checks if the given number is within the safe range(2^53 is max)

const safeIntegerValue = (number) => {
    return Number.isSafeInteger(number);
}

console.log(safeIntegerValue(Infinity));

console.log(safeIntegerValue(Math.pow(2, 54)));