/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

var assert = require("assert");

function sum(arr, start, end) {
    var total = 0;
    for (var i = start; i <= end; i++)
        total += arr[i];
    return total;
}
var maxSequence = function(arr) {
    var highest = 0;
    for (var spos = 0; spos < arr.length; spos++) {
        for (var epos = spos; epos < arr.length; epos++) {
            highest = Math.max(highest, sum(arr, spos, epos));
        }
    }
    return highest;
};

assert.equal(maxSequence([]), 0);
assert.equal(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);


/*
var maxSequence = function(arr) {
    var highest = {
        total: 0,
        start: -1,
        end: -1
    };
    for (var spos = 0; spos < arr.length; spos++) {
        for (var epos = spos; epos < arr.length; epos++) {
            var total = sum(arr, spos, epos);
            if (total > highest.total) {
                highest.total = total;
                highest.start = spos;
                highest.end = epos;
            }
        }
    }
    return highest.total;
};
*/
