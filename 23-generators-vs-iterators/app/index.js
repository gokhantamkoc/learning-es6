// Generators vs Iterators

// DO NOT FORGET GENERATORS HAVE THE ABILITY PAUSE, RESUME and RESET :)

// below code is an iterator
// const arrayIterator = (array) => {
//     let index = 0;

//     return {
//         next: () => {
//             if (index < array.length) {
//                 let next = array[index];
//                 index += 1;
//                 return next;
//             }
//         }
//     }
// }

// let it = arrayIterator([1,2,3]);

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

function* arrayIterator() {

    //short version
    // for(let arg of arguments) {
    //     yield arg;
    // }

    //shorter version
    yield* arguments;
}

let it = arrayIterator(1,2,3);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
