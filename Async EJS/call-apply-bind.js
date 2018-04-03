/*
Write a function called arrayFrom which converts an array-like-object into an array.
Напишите функцию нвзываемую arrayFrom которая преобразуется массив-как-обьект в массив

Examples:
    let divs = document.getElementsByTagName('divs');
    divs.reduce // undefined
    let converted = arrayFrom(divs);
    converted.reduce // function(){}....
*/

function arrayFrom(arrayLikeObject){
    return [].slice.call(arrayLikeObject);
}


/*
// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2
*/

function sumEvenArguments(){
    let args = [...arguments];
    let result = 0;
    args.forEach(el => {
        if (el % 2 === 0) {
            result += el;
        }
    });
    return result;
}

console.log(sumEvenArguments(1,2,3,4));
console.log(sumEvenArguments(1,2,6));
console.log(sumEvenArguments(1,2));
console.log(sumEvenArguments(1));

/*
Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"
напишите функцию invokeMax  принимающая функцию и max кол-во. invokeMax должен вернуть функцию которая при вызове
увеличивает счетчик. Если счетчик больше чем max кол-во, внутренняя функция должна вернуть "Maxed Out"
Examples:

    function add(a,b){
        return a+b
    }

    let addOnlyThreeTimes = invokeMax(add,3);
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(2,2) // 4
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(1,2) // "Maxed Out!"

*/

function add(a,b){
    return a+b
}

function invokeMax(fn, num){
    let count = 0;
    return function () {
        count++;
        return count > num ? `Maxed Out!` : fn.apply(this, arguments);
    }
}

console.log('****invokeMax*****');
let addOnlyThreeTimes = invokeMax(add,3);
console.log(addOnlyThreeTimes(1,2)); // 3
console.log(addOnlyThreeTimes(2,2));// 4
console.log(addOnlyThreeTimes(1,2)); // 3
console.log(addOnlyThreeTimes(1,2)); // "Maxed Out!"

/*
Write a function called once which accepts two parameters, a function and a value for the keyword 'this'. Once should return a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter.
напишите функцию once которая принимает 2 параметра - функцию  и значение для this. once должен вернуть новую функцию 
которая может быть вызвана только один раз со значением this для второго параметра функции
Examples:

    function add(a,b){
        return a+b
    }

    let addOnce = once(add, this);
    addOnce(2,2) // 4
    addOnce(2,2) // undefined
    addOnce(2,2) // undefined

    function doMath(a,b,c){
        return this.firstName + " adds " + (a+b+c)
    }

    let instructor = {firstName: "Elie"}
    let doMathOnce = once(doMath, instructor);
    doMathOnce(1,2,3) // "Elie adds 6"
    doMathOnce(1,2,3) // undefined


*/

function add(a,b){
    return a+b
}

let addOnce = once(add, this);
addOnce(2,2); // 4
addOnce(2,2); // undefined
addOnce(2,2); // undefined

function doMath(a,b,c){
    return this.firstName + " adds " + (a+b+c)
}

let instructor = {firstName: "Elie"};
let doMathOnce = once(doMath, instructor);
doMathOnce(1,2,3); // "Elie adds 6"
doMathOnce(1,2,3); // undefined

function once(fn, thisArg){
    let completed = false;
    return function () {
        if (!completed) {
            completed = true;
            return fn.apply(thisArg, arguments);
        }
    }
}

// BONUSES!

/*
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function
that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass
more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked.
You will have to make use of closure!
напишите функцию bind которая принимает функцию и значение для this. bind должна вернуть новую функцию которая при вызове
вызовет функцию переданную bind с правильным значением.
Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }

    let person = {
        firstName: 'Elie'
    }

    let bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Elie's favorite color is green"

    let bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Elie's favorite color is blue"

    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/

function bind(fn, thisArg){
    var outerArgs = [].slice.call(arguments,2);
    return function () {
        var innerArgs = [].slice.call(arguments);
        var allArgs = outerArgs.concat(innerArgs);
        return fn.apply(thisArg, allArgs);
    }
}

/*
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the arguments passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Flip should return a new function that when invoked takes the correct number of required arguments to that function which are then reversed. HINT - you will need to use the .length property on functions to figure out the correct amount of arguments. For example:

flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10)




Examples:

    function personSubtract(a,b,c){
        return this.firstName + " subtracts " + (a-b-c);
    }

    let person = {
        firstName: 'Elie'
    }

    let flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Elie subtracts -4"

    let flipFn2 = flip(personSubtract, person, 5,6);
    flipFn2(7,8). // "Elie subtracts -4"

    function subtractFourNumbers(a,b,c,d){
        return a-b-c-d;
    }

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/


function flip(fn, thisArg){
    var outerArgs = [].slice.call(arguments,2)
    return function(){
        var innerArgs = [].slice.call(arguments)
        var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length)
        return fn.apply(thisArg, allArgs.reverse())
    }   
}



