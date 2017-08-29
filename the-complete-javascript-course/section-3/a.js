
(function() {       // self-executing closure

    'use strict';

    var john = {
        name: 'John',
        yearOfBirth: 1990,
        calculateAge: function() {
            console.log("calculateAge :"+this);
            console.log("calculateAge :"+(2016 - this.yearOfBirth));

            function innerFunction() {
                console.log('innerFunction '+this);
            }
            innerFunction();
        }
    };

    john.calculateAge();

    var mike = {
        name: 'Mike',
        yearOfBirth: 1984
    };
    mike.calculateAge = john.calculateAge;
    mike.calculateAge();

})();
