function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = () => `${this.name} just barked!`;
}

let rusty = new Dog('Rusty', 3);
let fido = new Dog('Fido', 1);

console.log(rusty);
console.log(rusty.bark());
console.log(fido);
console.log(fido.bark());

console.log('***   ABOUT CAR or MOTORCYCLE   ***');

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make, model, year) {
    // Car.call(this, make, model, year);
    Car.apply(this, arguments);
    this.numWheels = 2;
}
console.log('   ');
console.log('***   ABOUT CAR  ***');
console.log('   ');
let car = new Car('KIA', 'Sorento', 2014);
console.log(car);


console.log('   ');
console.log('***   ABOUT MOTORCYCLE   ***');
console.log('   ');
let motorcycle = new Motorcycle('Yava', '501', 1980);
console.log(motorcycle);

// PART 1

// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber. Your function MUST be named Person.

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the object created from the Person functions' favorite number.
//
function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    Parent.apply(this, arguments);
    this.multiplyFavoriteNumber = (num) => this.favoriteNumber * num;
}


// PART 2

// Given the following code - refactor the Child function to remove all the duplication from the Parent function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
   Parent.apply(this, arguments);
}


