var arr = [5,11,13,8,6,7];
arr.findIndex(function(num, index, array) {
  if (num % 2 === 0) console.log (num);
});

