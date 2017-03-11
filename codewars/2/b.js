/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input

Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Example Input

[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

Output

Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example Output

["Open", "Open", "Senior", "Open", "Open", "Senior"]

*/

var assert = require("assert");

function good_openOrSenior(data) {
    var results = [];
    for (var idx in data) {
        var item = data[idx];
        results.push(item[0] >= 55 && item[1] > 7 ? 'Senior' : 'Open');
    }
    return results;
}

function OK_openOrSenior(data) {
    var results = [];
    for (var item of data) {
        results.push(item[0] >= 55 && item[1] > 7 ? 'Senior' : 'Open');
    }
    return results;
}

function openOrSenior(data) {
    return data.map(function(item) {
        return item[0] >= 55 && item[1] > 7 ? 'Senior' : 'Open';
    });
}

var ret = openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]);
assert.deepEqual(ret, ['Open', 'Senior', 'Open', 'Senior']);

var ret = openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]);
assert.deepEqual(ret, ['Open', 'Open', 'Open', 'Open']);

var ret = openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]);
assert.deepEqual(ret, ['Senior', 'Open', 'Open', 'Open']);

