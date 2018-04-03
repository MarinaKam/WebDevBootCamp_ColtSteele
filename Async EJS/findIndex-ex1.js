var arr = [3,4,6,2,1];
arr.findIndex(function(num, index, array) {
    num === 6 ? console.log( num ) : console.log(`there are only ${num}`);
});
