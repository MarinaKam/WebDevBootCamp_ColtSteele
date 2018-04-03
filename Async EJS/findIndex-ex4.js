// var langs = ["Java", "C++", "JavaScript"];
// langs.findIndex(function(lang, index, arr) {
//   console.log(lang === "JavaScript");
// });
//
// function findIndex(arr, callback) {
//     for (var i = 0; i < arr.length; i++) {
//       if (callback(arr[i], i, arr)) {
//         return i;
//       }
//     }
//     return -1;
// }


// HINTS
// the function should iterate through the array passed to it and invoke the callback function at each iteration
// the callback function should accept three parameters - the value you are iterating over, the index you are currently at, and the entire array
// if the callback returns true at any point, return the index at which you are iterating over
// otherwise return -1


/*var timer = 10;

var countDown = setInterval(function() {
    timer--;
    console.log('timer: ', timer);
    if(timer === 0) {
        console.log('Ring ring ring');
        clearInterval(countDown);
        }
    }, 1000);*/

function countDown(timer) {
    var timeout = setInterval(function() {
        timer--;
        console.log('timer: ', timer);
        if(timer === 0) {
            console.log('Ring ring ring');
            clearInterval(timeout);
        }
    }, 1000);
}
countDown(3);