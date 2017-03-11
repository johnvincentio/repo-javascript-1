
// A function is anonymous when it does not have a name (name property is an empty string '')

var getType = function(variable) {
    return typeof variable;
};
console.log("getType.name :"+getType.name+":"); // is ''


// When the expression has the name specified, this is a named function expression.

var getType = function funName(variable) {
    console.log(typeof funName === 'function'); // => true
    return typeof variable;
};
console.log(getType(3));                    // => 'number'
console.log(getType.name);                  // => 'funName', this named function expression
console.log(typeof funName === 'function'); // => false


/*
In many situations it seems reasonable to use named functions and avoid anonymous ones. This brings a series of benefits:

The error messages and call stacks show more detailed information when use the function names
More comfortable debugging by reducing the number of anonoymous stack names
The function name helps to understand quickly what it does
It is possible to access the function by name inside its scope for recursive calls or detaching event listeners
*/
