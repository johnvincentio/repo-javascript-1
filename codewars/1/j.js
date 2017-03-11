/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

Examples:

findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect

*/

var assert = require("assert");

function OLD_findNextSquare(sq) {
    var sqrt = Math.sqrt(sq);
    var flr = Math.floor(sqrt);
    console.log("sqrt "+sqrt+" flr "+flr);
    if (sqrt == flr++) return flr * flr;
    return -1;
}
function OLD2_findNextSquare(sq) {
    var flr = Math.floor(Math.sqrt(sq));
    if (sq === flr*flr++) return flr * flr;
    return -1;
}

function DD_findNextSquare(sq) {
    var flr = Math.floor(Math.sqrt(sq));
    return sq === flr*flr++ ? flr * flr : -1;
}

function findNextSquare(sq) {
    var flr = Math.floor(Math.sqrt(sq));
    return sq === flr*flr ? ++flr * flr : -1;
}

var ret = findNextSquare(121);
assert.equal(ret, 144);

var ret = findNextSquare(625);
assert.equal(ret, 676);

var ret = findNextSquare(319225);
assert.equal(ret, 320356);

var ret = findNextSquare(15241383936);
assert.equal(ret, 15241630849);


var ret = findNextSquare(114);
assert.equal(ret, -1);

var ret = findNextSquare(155);
assert.equal(ret, -1);

var ret = findNextSquare(342786627);
assert.equal(ret, -1);



//console.log(Math.sqrt(-10));
//console.log(Math.sqrt(-1));
//console.log(Math.sqrt(0));
//console.log(Math.sqrt(1));
//console.log(Math.sqrt(2));
//console.log(Math.sqrt(3));
//console.log(Math.sqrt(4));
//console.log(Math.sqrt(5));
//console.log(Math.sqrt(9));
//console.log(Math.sqrt(12));
//
//console.log(Math.sqrt(16));
//console.log(Math.sqrt(25));
//
//console.log(Math.sqrt(50));



