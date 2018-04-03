function Person(name) {
    this.name = name;
}

let marie = new Person('Marie');
console.log(marie);

Person.prototype.isInstructor = true;
console.log('Person - ' + Person.prototype.isInstructor);
console.log('Marie - ' + marie.isInstructor);

console.log(marie.__proto__ === Person.prototype);
console.log(marie.__proto__);
console.log(Person.prototype);

function Vehicle(model, year) {
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
    return this.isRunning = true;
};

Vehicle.prototype.turnOff = function() {
    return this.isRunning = false;
};

Vehicle.prototype.honk = function() {
    return this.isRunning ? 'beep' : '';
};

let cycle = new Vehicle('PROFI', 2017);

console.log(cycle);
console.log(cycle.turnOn());
console.log(cycle.isRunning);
console.log(cycle.turnOff());
console.log(cycle.honk());
// console.log(Vehicle.prototype);