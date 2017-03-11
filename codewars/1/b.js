var assert = require("assert");

function highAndLow(numbers) {
    var parts = numbers.split(" ");
    var high = low = null;
    for (var i = 0; i < parts.length; i++) {
        var item = parseInt(parts[i]);
        if (low === null || item < low) low = item;
        if (high === null || item > high) high = item;
    }
    return high + " " + low;
}

var ret = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
console.log("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6; ret "+ret);
assert.equal(ret, "542 -214");

var ret = highAndLow("1 2 3 4 5");
console.log("1 2 3 4 5; ret "+ret);
assert.equal(ret, "5 1");

var ret = highAndLow("1 2 -3 4 5");
console.log("1 2 -3 4 5; ret "+ret);
assert.equal(ret, "5 -3");

var ret = highAndLow("1 9 3 4 -5");
console.log("1 9 3 4 -5; ret "+ret);
assert.equal(ret, "9 -5");

var ret = highAndLow("1 -1");
console.log("1 -1; ret "+ret);
assert.equal(ret, "1 -1");

var ret = highAndLow("1 1");
console.log("1 1; ret "+ret);
assert.equal(ret, "1 1");

var ret = highAndLow("1");
console.log("1; ret "+ret);
assert.equal(ret, "1 1");

//
//function highAndLow(numbers) {
////    console.log("numbers "+numbers);
//    var parts = numbers.split(" ");
////    console.log("parts "+parts);
//    var high = low = null;
//
//    for (var i = 0; i < parts.length; i++) {
//        var item = parseInt(parts[i]);
////        console.log("item "+item+" low "+low+" high "+high);
//        if (low === null || item < low) low = item;
//        if (high === null || item > high) high = item;
//    }
////    console.log("low :"+low+": high :"+high+":");
//    return high + " " + low;
//}
