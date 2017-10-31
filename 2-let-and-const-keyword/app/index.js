//let is like var
let limit1 = 100; //equal to var limit = 100;
console.log(limit1);


//const means constant

const limit2 = 100;
console.log(limit2);

//const does work assignment operators. methods that belong to that variable can still manipulate the value

const emails = ['test1@example.com', 'test2@example.com', 'test3@example.com'];
console.log("Before push: " + emails);
emails.push('test4@example.com');
console.log("After pushing an element: " + emails);