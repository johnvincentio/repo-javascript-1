
/*jshint esnext: true */

'use strict';

/////////////////////////////////
// Lecture: Blocks and IIFEs

// ES6
{
    const a = 1;
    let b = 2;
    var c = 5;
    console.log(a + b);
}

//console.log(a + b);
console.log(c);


// ES5
(function() {
    var c = 3;
})();

console.log(c);
