// var arr = [1,2,3,4,5,6];
// function double(arr) {
//   for(var i = 0; i < arr.length; i++) {
//     console.log(arr[i] * 2);
//   }
// }
// double(arr);
//
// arr.forEach(el => {
//     console.log(el * 2);
// });

function halfValue(arr) {
    let newArr = [];
    arr.forEach((val) => {
        newArr.push(val / 2);
    });
    return newArr;
}

console.log(halfValue([2, 4, 6]));