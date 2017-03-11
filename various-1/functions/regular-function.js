/*
The function declaration matches for cases when a regular function should be created. Regular means that you declare the function once and later invoke it in many different places.
*/

function sum(a, b) {
    return a + b;
}
sum(5, 6);          // => 11
var jv1 = ([3, 7]).reduce(sum);       // => 10
console.log("jv1 "+jv1);

/*
reduce iterates through the array elements, passing the element as b
and the accumulator as a
*/
var total = [0, 1, 2, 3].reduce(function(a, b) {
    console.log("a "+a+" b "+b);
    return a + b;
}, 0);         // this is the initial value
console.log(total);
