class Student {
    constructor (first, second) {
        this.first = first;
        this.second = second;
    }
    sayHi() {
        return `Hi, ${this.first} ${this.second}`;
    }

    static isStudent(obj) {
        return obj.constructor === Student;
    }
}

let stud = new Student('Marie', 'Kam');
let notStude = 'Marina';

console.log(stud.sayHi());
console.log(Student.isStudent(stud));//true
console.log(Student.isStudent(notStude));//false

// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.

/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of
the parameter multiplied with the favoriteNumber property on a person object.

Examples:
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/
class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
        this.family = [];
    }

    multiplyFavoriteNumber(num) {
        return this.favoriteNumber * num;
    }

    addToFamily(obj){
        if(obj.constructor === Person && this.family.indexOf(obj) === -1) {
            this.family.push(obj)
        }
        return this.family
    }
}

let person = new Person("Elie", "Schoppik", "purple", 34);
console.log(person.multiplyFavoriteNumber(10));

// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model and year property.
// 2 - Add an instance method called start which returns the string "VROOM!"
// 3 - Add an instance method called toString which returns the string "The make, model, and year are" concatenated with
// the make, model and year property

/* Examples
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/
// 4 - Create a class for a Car. Each object created from the Car function should also have a make, model, and year and
// a property called numWheels which should be 4.
// The Car prototype should inherit all of the methods from the Vehicle prototype

// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle function should also have a make, model,
// and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods
// from the Vehicle prototype

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        return 'VROOM!'
    }

    toString() {
        return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.numWheels = 2;
    }
}

let vehicle = new Vehicle("Tractor", "John Deere", 1999);
console.log(vehicle.toString()); // 'The make, model, and year are Tractor John Deere 1999'
console.log(vehicle.model);
console.log(vehicle.make);

var car = new Car('Kia', 'Sorento', 2010);
console.log('================Car===================');
console.log(car.toString());
// class Person {
//     constructor (firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
//
// var elie = new Person('Elie', 'Schoppik');
//
