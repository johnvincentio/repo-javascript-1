/*
Implement the function unique_in_order which takes as argument a sequence and
returns a list of items without any elements with the same value next to each other
and preserving the original order of elements.

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var assert = require("assert");

var uniqueInOrder=function(iterable) {
    var arr = [];
    for (var i = 0; i < iterable.length; i++) {
        if (iterable[i] !== arr[arr.length-1]) arr.push(iterable[i]);
    }
    return arr;
};

var ret = uniqueInOrder('AAAABBBCCDAABBB');
console.log("ret "+ret);
assert.deepEqual(ret, ['A', 'B', 'C', 'D', 'A', 'B']);

var ret = uniqueInOrder('ABBCcAD');
console.log("ret "+ret);
assert.deepEqual(ret, ['A', 'B', 'C', 'c', 'A', 'D']);

var ret = uniqueInOrder([1,2,2,3,3]);
console.log("ret "+ret);
assert.deepEqual(ret, [1, 2, 3]);


/*

var uniqueInOrder=function(iterable) {
    var arr = [];
    for (var i = 0; i < iterable.length; i++) {
        if (iterable[i] !== arr[arr.length-1]) arr.push(iterable[i]);
    }
    return arr;
};

var uniqueInOrder=function(iterable) {
    var arr = [iterable[0]];
    console.log("arr "+arr);
    console.log("iterable "+iterable);
    for (var i = 1; i < iterable.length; i++) {
        console.log("i "+i+" iterable[i] "+iterable[i]+" arr[arr.length-1] "+arr[arr.length-1]);
        if (iterable[i] !== arr[arr.length-1]) arr.push(iterable[i]);
    }
    return arr;
};
*/
