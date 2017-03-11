/*
Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

*/

var assert = require("assert");

function order(words) {
    var results = [];
    var parts = words.split(' ');
    for (var x in parts) {
        var num = parts[x].replace(/[a-zA-z]/gi, '');
        results[num - 1] = parts[x];
    }
    return results.join(' ');
}

var ret = order("is2 Thi1s T4est 3a");
console.log("ret :"+ret+":");
//assert.deepEqual(ret, "Thi1s is2 3a T4est");
assert.equal(ret, "Thi1s is2 3a T4est");

var ret = order("4of Fo1r pe6ople g3ood th5e the2");
console.log("ret :"+ret+":");
//assert.deepEqual(ret, "Thi1s is2 3a T4est");
assert.equal(ret, "Fo1r the2 g3ood 4of th5e pe6ople");

var ret = order("");
console.log("ret :"+ret+":");
//assert.deepEqual(ret, "Thi1s is2 3a T4est");
assert.equal(ret, "");
