/*
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

findNb(1071225) --> 45
findNb(91716553919377) --> -1

*/

var assert = require("assert");

function findNb(m) {
    var num = 0, total = 0;
    while (total < m) {
        total += Math.pow(++num, 3);
    }
    return total === m ? num : -1;
}

var ret = findNb(1071225);
console.log("ret "+ret);
assert.equal(ret, 45);

var ret = findNb(91716553919377);
console.log("ret "+ret);
assert.equal(ret, -1);


var total = 0;
for (var i = 1; i < 50; i++) {
    total += Math.pow(i, 3);
    if (total === 1071225) break;
}
console.log("total "+total);

/*
function findNb(m) {
    for (var i = 1, total = 0; ; i++) {
        total += Math.pow(i, 3);
        if (total === m) return i;
        if (total > m) break;
    }
    return -1;
}
*/
