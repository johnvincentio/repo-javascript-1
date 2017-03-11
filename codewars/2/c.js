/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/

var assert = require("assert");

function addBinary(a,b) {
    return (a + b).toString(2);
}

var ret = addBinary(1, 2);
assert.equal(ret, "11");
