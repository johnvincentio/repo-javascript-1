// function declaration
/*
The function declaration creates a variable in the current scope with the identifier equal to function name. This variable holds the function object.
*/

function isEven(num) {
    return num % 2 === 0;
}

isEven(24); // => true
isEven(11); // => false


//
// function declaration in conditionals
//

(function() {
    'use strict';

    var ok;     // without this, ok() will throw error
    if (true) {
        ok = function() {
            return 'true ok';
        };
    }
    else {
        ok = function() {
            return 'false ok';
        };
    }
    console.log(typeof ok === 'function'); // => true
    console.log(()); // => 'true ok'
})();

console.log("at end");

