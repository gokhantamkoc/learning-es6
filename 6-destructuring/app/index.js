//destructuring

let z = [4, 5, 6];

//let's take 4 and 5 from the array
//The hard way is ...
let four = z[0];
let five = z[1];

console.log('The hard way', four, five)

//The easy way is destructuring :)

let [four2, five2] = z;  
// destructuring is put your variables into an array and assign that array 
// with the array of which values is wanted.
console.log('The easy way:', four2, five2);

//Let's use destructuring on objects
let car = {
    brand: 'Opel',
    model: 'Mokka',
    currentSpeed: 0,
    maxSpeed: 190,
    accelerate: function(acceleration) {
        this.currentSpeed += acceleration;
        if(this.currentSpeed > this.maxSpeed) {
            this.currentSpeed = this.maxSpeed;
        }
    },
    decelerate: function(acceleration) {
        this.currentSpeed -= acceleration;
        if(this.currentSpeed < 0) {
            this.currentSpeed = 0;
        }
    }
}

let {brand, model, currentSpeed, maxSpeed, accelerate, decelerate} = car; //the name should be the same as objects' variable names
console.log(accelerate);
console.log(currentSpeed);
//console.log(brand, model, currentSpeed);