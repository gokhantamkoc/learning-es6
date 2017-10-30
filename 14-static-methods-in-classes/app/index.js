// static method of a class
// if we are not using the class with data, then you do not need to use constructor.
// just define the static methods.

class Calculator {
    static multiply(a, b) {
        return a * b;
    }

    static add(a, b) {
        return a + b;
    }
}

console.log(Calculator.multiply(20, 10));
console.log(Calculator.add(5, 7));
