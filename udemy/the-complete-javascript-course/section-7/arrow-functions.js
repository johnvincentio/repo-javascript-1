
/*jshint esnext: true */

'use strict';

/////////////////////////////////
// Lecture: Arrow functions


const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log("ages5 "+ages5);


// ES6

// one parameter
let ages6 = years.map(el => 2016 - el);
console.log("(1) ages6 "+ages6);

// two parameters
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log("(2) ages6 "+ages6);

// two parameters, multi lines of code in the function
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;     // return explicitly stated
});
console.log("(3) ages6 "+ages6);
