
(function() {       // self-executing closure

    'use strict';

    function printFullAge(years) {
        var myArr = [];
        for (var i = 0; i < years.length; i += 1) {
            var age = 2016 - years[i];
            var fullAge = (age >= 18);
            myArr.push(fullAge);
        }
        return myArr;
    }
    var years1 = [2001, 1990, 1997];
    var years2 = [1965, 2008, 1992];
    var full_1 = printFullAge(years1);
    var full_2 = printFullAge(years2);
    console.log("full_1 "+full_1);
    console.log("full_2 "+full_2);

    var ages = [];
    for (var i = 0; i < years1.length; i += 1) {
        ages.push(2016 - years1[i]);
    }
    for (var j = 0; j < ages.length; j += 1) {
        if (ages[j] >= 18) {
            console.log("Age :"+ages[j]);
        }
    }
})();
