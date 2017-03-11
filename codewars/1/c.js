var assert = require("assert");

/*
This function returns true only if the predicate supplied returns true for all the items in the array
*/
Array.prototype.all = function(p) {
    for (var i = 0; i < this.length; i++) {
        if (! p(this[i])) return false;
    }
    return true;
};

/*
This function returns true only if the predicate supplied returns false for all the items in the array
*/
Array.prototype.none = function(p) {
    for (var i = 0; i < this.length; i++) {
        if (p(this[i])) return false;
    }
    return true;
};

/*
This function returns true if at least one of the items in the array returns true for the predicate supplied
*/
Array.prototype.any = function(p) {
    for (var i = 0; i < this.length; i++) {
        if (p(this[i])) return true;
    }
    return false;
};

function isGreaterThanZero(num) {
//    console.log("---isGreaterThanZero; num "+num);
    return num > 0;
}

function isLessThanZero(num) {
//    console.log("---isLessThanZero; num "+num);
    return num < 0;
}

var ret = [1, 2, 3].all(isGreaterThanZero);
console.log("[1, 2, 3]; ret " + ret);
assert.equal(true, ret);

var ret = [-1, 0, 2].all(isGreaterThanZero);
console.log("[-1, 0, 2]; ret " + ret);
assert.equal(false, ret);

var ret = [1, 2, 3].all(isLessThanZero);
console.log("[1, 2, 3]; ret " + ret);
assert.equal(false, ret);

var ret = [-1, -2, 0].all(isLessThanZero);
console.log("[-1, -2, 0]; ret " + ret);
assert.equal(false, ret);

var ret = [-1, -2, -3].all(isLessThanZero);
console.log("[-1, -2, -3]; ret " + ret);
assert.equal(true, ret);



var ret = [1, 2, 3].none(isGreaterThanZero);
console.log("[1, 2, 3]; ret " + ret);
assert.equal(false, ret);

var ret = [-1, 2, 3].none(isGreaterThanZero);
console.log("[-1, 2, 3]; ret " + ret);
assert.equal(false, ret);

var ret = [-1, -2, -3].none(isGreaterThanZero);
console.log("[-1, -2, -3]; ret " + ret);
assert.equal(true, ret);

var ret = [-1, 2, 3].none(isLessThanZero);
console.log("[-1, 2, 3]; ret " + ret);
assert.equal(false, ret);



var ret = [-1, -2, -3].any(isGreaterThanZero);
console.log("[-1, -2, -3]; ret " + ret);
assert.equal(false, ret);

var ret = [-1, 2, 3].any(isGreaterThanZero);
console.log("[-1, 2, 3]; ret " + ret);
assert.equal(true, ret);

var ret = [-1, 2, 3].any(isLessThanZero);
console.log("[-1, 2, 3]; ret " + ret);
assert.equal(true, ret);

var ret = [-1, -2, -3].any(isLessThanZero);
console.log("[-1, 2, 3]; ret " + ret);
assert.equal(true, ret);

var ret = [1, 2, 3].any(isLessThanZero);
console.log("[-1, 2, 3]; ret " + ret);
assert.equal(false, ret);



//Test.expect([1, 2, 3].all(isGreaterThanZero), 'All are greater than zero');
//Test.expect(![-1, 0, 2].all(isGreaterThanZero), 'One is less than zero');
//
//Test.expect(![-1, 2, 3].none(isLessThanZero), 'One is less than zero');
//Test.expect([-1, -2, -3].none(isGreaterThanZero), 'None are greater than zero');
//
//Test.expect([-1, 2, 3].any(isGreaterThanZero), 'Two are greater than zero');
//Test.expect(![-1, -2, -3].any(isGreaterThanZero), 'None are greater than zero');

//
//Array.prototype.all = function(p) {
//    console.log("this "+this);
//
//    for (var i = 0; i < this.length; i++) {
//        console.log("this[i] "+this[i]);
//        if (this[i] < 0) return false;
//    }
//    return true;
//};
//
