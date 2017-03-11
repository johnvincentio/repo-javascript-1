
var assert = require("assert");

var wrapper = {
    result: "",

    reset:function() {
        this.result = '';
        return this;
    },

    append:function(chr, repeat) {
//        console.log("--- append");
        this.result += ':';
        for (var i = 1; i <= repeat; i++)
            this.result += chr;
        this.result += ':';
        return this;
    },

    newline:function() {
        this.result += '\n';
        return this;
    },

    display:function() {
        return this.result;
    }
};

function helper(chr, repeat) {
    var str = "";
    for (var i = 1; i <= repeat; i++)
        str += chr;
    return str;
}

function add(blanks, chr, repeat) {
    return helper(' ', blanks) + helper(chr, repeat) + '\n';
}

function diamond(n) {
    if (n === undefined || typeof n != 'number' || n < 0 || n % 2 === 0) return null;
    var result = "";
    for (var i = 1; i <= n - 2; ) {
        result += add((n - i)/2, '*', i);
        i += 2;
    }
    result += add(0, '*', n);
    for (i = n - 2; i >= 0; ) {
        result += add((n - i)/2, '*', i);
        i -= 2;
    }
    return result;
}

assert.equal(diamond(), null);
assert.equal(diamond('a'), null);

//assert.equal(diamond(-1), null);
//assert.equal(diamond(0), null);
//assert.equal(diamond(2), null);
//assert.equal(diamond(10), null);
//
//assert.equal(diamond(1), '*\n');
//assert.equal(diamond(3), ' *\n***\n *\n');

var result = diamond(3);
assert.equal(result, ' *\n***\n *\n');

var result = diamond(15);
console.log("result :"+result+":");

