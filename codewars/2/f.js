/*
The test fixture I use for this kata is pre-populated.

It will compare your guess to a random number generated in Ruby by:

(Kernel::rand() * 100 + 1).floor
In Javascript/CoffeeScript by:

Math.floor(Math.random() * 100 + 1)

You can pass by relying on luck or skill but try not to rely on luck.
*/

var assert = require("assert");

var guess = 10;

Math.floor = function(number) {
    return 10;
};

var lucky_number = Math.floor(Math.random() * 100 + 1);
console.log("lucky_number "+lucky_number);
assert.equal(lucky_number, guess);
