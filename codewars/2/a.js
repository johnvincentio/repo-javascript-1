/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/

var assert = require("assert");

function Works_validatePIN (pin) {
    if (pin.length !== 4 && pin.length !== 6) return false;
    var letters = pin.replace(/[0-9]/gi, '');
    return letters.length === 0;
}

function validatePIN_1 (pin) {
    return (/^[0-9]{6}$|^[0-9]{4}$/).test(pin);
}

function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}

var ret = validatePIN("1234");
assert.equal(ret, true);

var ret = validatePIN("123456");
assert.equal(ret, true);

var ret = validatePIN("0000");
assert.equal(ret, true);

var ret = validatePIN("000000");
assert.equal(ret, true);


var ret = validatePIN("a234");
assert.equal(ret, false);

var ret = validatePIN("1");
assert.equal(ret, false);

var ret = validatePIN("12");
assert.equal(ret, false);

var ret = validatePIN("123");
assert.equal(ret, false);

var ret = validatePIN("12345");
assert.equal(ret, false);

var ret = validatePIN("1234567");
assert.equal(ret, false);

var ret = validatePIN("-1234");
assert.equal(ret, false);

var ret = validatePIN("1.234");
assert.equal(ret, false);

var ret = validatePIN("00000000");
assert.equal(ret, false);





/*
function validatePIN (pin) {
    if (pin.length !== 4 && pin.length !== 6) return false;
    var letters = pin.replace(/[0-9]/gi, '');
    console.log("letters :"+letters+":");
//    console.log("pin.replace(/[0-9]/gi, ' ').length "+pin.replace(/[0-9]/gi, ' ').length);
    console.log("pin.length "+pin.length);
    console.log("letters.length "+letters.length);
    if (pin.length !== letters.length) return false;
    return true;
}

*/
