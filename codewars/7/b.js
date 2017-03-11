/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
*/

/* jshint node: true */

var assert = require("assert");

function convert(chr) {
    switch (chr) {
        case 'M':
            return 1000;
        case 'D':
            return 500;
        case 'C':
            return 100;
        case 'L':
            return 50;
        case 'X':
            return 10;
        case 'V':
            return 5;
        case 'I':
            return 1;
    }
    return 0;
}
function solution(roman) {
    console.log("roman :"+roman+":");
    var result = 0;
    var lastValue = 0;
    for (var i = roman.length; i >= 0; i--) {
        var value = convert(roman.charAt(i));
        console.log("value "+value);
        if (value >= lastValue)
            result +=value;
        else
            result -= value;
        lastValue = value;
    }
    console.log("result "+result);
    return result;
}

assert.equal(solution("XXI"), 21);
assert.equal(solution("MCMXC") , 1990);
assert.equal(solution("MMVIII"), 2008);
assert.equal(solution("MDCLXVI"), 1666);




