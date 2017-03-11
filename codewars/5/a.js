/*
You have to write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

*/

var assert = require("assert");

function checkPointless (item) {
    if (item === "NORTHSOUTH") return true;
    if (item === "SOUTHNORTH") return true;
    if (item === "EASTWEST") return true;
    if (item === "WESTEAST") return true;
    return false;
}

function dirReduc(arr) {
    var spos = 0;
    while (spos + 1 < arr.length) {
        if (checkPointless (arr[spos] + arr[spos+1])) {
            arr.splice(spos, 2);
            spos = 0;
        }
        else
            spos++;
    }
    return arr;
}

var ret = dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
assert.deepEqual(ret, ["WEST"]);

var ret = dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);
assert.deepEqual(ret, ["NORTH", "WEST", "SOUTH", "EAST"]);

var ret = dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);
assert.deepEqual(ret, []);

