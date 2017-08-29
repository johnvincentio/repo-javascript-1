
(function() {       // self-executing closure

    'use strict';

    var a = 'hello';
    console.log("a: "+a);
    first();
    function first() {
        a = 'nomore';
        var b = 'hi';
        second();
        function second() {
            var c = 'hey';
            console.log(a + b + c);
        }
    }
    console.log("a: "+a);
})();

