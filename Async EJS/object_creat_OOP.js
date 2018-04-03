// 1 - Create a constructor function for a Vehicle. Each vehicle should have a make, model and year property.

// 2 - Add a function to the Vehicle prototype called start which returns the string "VROOM!"

// 3 - Add a function to the Vehicle prototype called toString which returns the string "The make, model, and year are"
// concatenated with the make, model and year property

/* Examples
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a constructor function for a Car. Each object created from the Car function should also have a make, model,
// and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from
// the Vehicle prototype

// 5 - Create a constructor function for a Motorcycle. Each object created from the Motorcycle function should also have
// a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit
// all of the methods from the Vehicle prototype

function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Vehicle.prototype.start = function () {
  return "VROOM!";
};

Vehicle.prototype.toString = function () {
    return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
};

function Car(make, model, year) {
    Vehicle.apply(this, arguments);
    this.numWheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;


function Motorcycle(make, model, year) {
    Vehicle.apply(this, arguments);
    this.numWheels = 2;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

let vehicle = new Vehicle("Tractor", "John Deere", 1999);
let car = new Car("Jeep", "BIG JEEP", 2001);
let motorcycle = new Motorcycle("Java", "Little Java", 2001);
// vehicle.toString(); // 'The make, model, and year are Tractor John Deere 1999'

console.log(vehicle.start());
console.log(vehicle.toString());
console.log(vehicle.numWheels);
console.log(car.start());
console.log(car.toString());
console.log(car.numWheels);
console.log(motorcycle.start());
console.log(motorcycle.toString());
console.log(motorcycle.numWheels);

console.log(Car.prototype.constructor);
console.log(Motorcycle.prototype.constructor);