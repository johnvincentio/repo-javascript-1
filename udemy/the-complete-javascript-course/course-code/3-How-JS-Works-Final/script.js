/////////////////////////////////////
// Lecture: Hoisting

/*
// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
};


// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/


/////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

/*
/////////////////

var name = 'john';

function first() {
    var a = 'Hello!';
    second();
    var x = a + name;
}

function second() {
    var b = 'Hi!';
    third();
    var z = b + name;
}

function third() {
    var c = 'Hey!';
    var z = c + name;
}
first();

*/

////////////
/*
// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    console.log(a+d);
}

*/


/////////////////////////////////////
// Lecture: The this keyword

/*
//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
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

*/

/*
function Person(first, last, age) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    var bankBalance = 7500;

    var returnBalance = function() {        // private method
        return bankBalance;
    };

    // create the new function here
    this.askTeller = function() {       // public, returns a function
        return returnBalance;
    };
    this.getName = function() {
        return this.firstname + " " + this.lastname;
    };
}

var john = new Person('John', 'Smith', 30);
console.log(john.returnBalance);

var myBalanceMethod = john.askTeller(); // returns a method
var myBalance = myBalanceMethod();
console.log(myBalance);
*/

var Spencer = {
    age: 22,
    country: "United States"
  };
  
  // make your own object here called me
  
  Spencer.me = {};
  Spencer.me.age = 34;
  Spencer.me.country = 'Mars';

  