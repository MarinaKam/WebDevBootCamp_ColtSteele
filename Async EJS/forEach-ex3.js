var strings = ["my", "forEach", "example"];

var result = "";
strings.forEach(function(str, index, array) {
  if (array.length - 1 !== index){
    result += str + " ";
  } else {
    result += str + "!!!";
  }
});

console.log(result);

