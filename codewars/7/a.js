var assert = require("assert");

function powersOfTwo(n) {
    var result = [];
    for (var i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));
    }
    return result;
}

assert.deepEqual(powersOfTwo(0), [1]);
assert.deepEqual(powersOfTwo(1), [1, 2]);
assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16]);
