//
// Function expression: starts with "var"
//
var isTruthy = function(value) {
  return !!value;
};

console.log(isTruthy(true));
console.log(isTruthy(false));
console.log(isTruthy(0));       // false
console.log(isTruthy(1));       // true

//
// Function expression: an argument for .filter()
//
var numbers = ([1, false, 5]).filter(function(item) {
    return typeof item === 'number';
});

console.log(numbers);


// another example

var count = function(array) { // Function expression
    return array.length;
};

console.log(count([5, 7, 8])); // => 3

//
// another example
//
var methods = {
    numbers: [1, 5, 8],
    sum: function() { // Function expression
        return this.numbers.reduce(function(acc, num) { // Function expression
            return acc + num;
        });
    }
};

console.log(methods.sum());     // 14

