/*
An arrow function is defined using a pair of parenthesis that contains the list of parameters (param1, param2, ..., paramN), followed by a fat arrow => and a pair of curly braces {...} that delimits the body statements.
When the arrow function has only one parameter, the pair of parenthesis can be omitted. When it contains a single statement, the curly braces can be omitted too.

The function declared using a fat arrow has the following properties:

The arrow function does not create its own execution context, but takes it lexically (contrary to function expression or function declaration, which create own this depending on invocation)
The arrow function is anonymous: name is an empty string (contrary to function declaration which have a name)
arguments object is not available in the arrow function (contrary to other declaration types that provide arguments object)

*/

/*jshint esnext: true */

var absValue = (number) => {
  if (number < 0) {
    return -number;
  }
  return number;
};
console.log(absValue(-10)); // => 10
console.log(absValue(5));   // => 5

var numbers = [1, 5, 10, 0];
numbers.some(item => item === 0); // => true
