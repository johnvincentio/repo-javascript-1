//
// Immediately-Invoked Function Expression, or IIFE for short. It executes immediately after it’s created.
//

/*
ref:
https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
http://www.concretepage.com/javascript/immediately-invoked-function-expression-iife-javascript-tutorial-self-executing-anonymous-function-example
*/

/*
It has nothing to do with any event-handler for any events (such as document.onload).
The first pair of parentheses (function(){...}) turns the code within (in this case, a function) into an expression, and the second pair of parentheses (function(){...})() calls the function that results from that evaluated expression.

This pattern is often used when trying to avoid polluting the global namespace, because all the variables used inside the IIFE (like in any other normal function) are not visible outside its scope.
This is why, maybe, you confused this construction with an event-handler for window.onload, because it’s often used as this:
*/


//
// Common syntax
//

(function() {
    //code here
})();

(function() {
    //code here
}());



//
// Pass parameters to IIFE
//
var a = 5, b = 10;
(function(arg1, arg2) {
    var sum = arg1 + arg2;
    console.log(sum);// Output will be 15
})(a, b);



//
// Return a value from IIFE
//
var message = (function(name) {
    return 'Your name: ' + name;
})('Fred');

console.log(message);       // Your name: Fred

/*
let's take this apart
*/

var message = function(name) {
    return 'Your name: ' + name;
};
console.log("(1) message "+message("bill"));    // (1) message Your name: bill

// or

var message = function(name) {
    return 'Your name: ' + name;
};
message("jane");

// or

var message = function(name) {
    return 'Your name: ' + name;
}("anne");
console.log("(2) message; "+message);   // (2) message; Your name: anne

// or

var my_name = 'john';
var message = function(name) {
    return 'Your name: ' + name;
}(my_name);
console.log("(3) message; "+message);   // (3) message; Your name: john

// or

var my_name = 'sue';
var message = function(name) {
    return 'Your name: ' + name;
};
console.log("(4) message; "+message(my_name));



//
// IIFE with private methods
//
var message = (function() {
    var msg = 'Default Message';
    return {
        getMsg: function() {
            return msg;
        },
        setMsg: function(data){
            msg = data;
        }
    };
})();

console.log(message.getMsg());// Output: Default Message
message.setMsg('Hello World!');
console.log(message.getMsg());// Output: Hello World!



//
// Function expression (IIFE): starts with "("
//
(function messageFunction(message) {
    console.log("in messageFunction; message "+message);
    return message + ' World!';
})('Hello again');

var jv = this.messageFunction;
console.log("jv :"+jv+":");

console.log(this.messageFunction);


//
// consider the following:
//   anonymous function expression
//

var f = function () {
    console.log("in f");
};
f();

// roll this up

var f = function () {
    console.log("in rolled-up f");
}();

//
// consider the following:
//   anonymous function expression
//

var a = 5, b = 10;
var g = function (arg1, arg2) {
    console.log("in g");
    var sum = arg1 + arg2;
    console.log(sum);
};
g(a, b);

// roll this up

var a = 8, b = 23;
var g = function (arg1, arg2) {
    console.log("in rolled-up g");
    var sum = arg1 + arg2;
    console.log(sum);
}(a, b);

// or

var g = function (arg1, arg2) {
    console.log("in rolled-up g");
    var sum = arg1 + arg2;
    console.log(sum);
}(12, 15);















