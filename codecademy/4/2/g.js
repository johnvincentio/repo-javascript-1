function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    var bankBalance = 7500;     // private
    this.getBalance = function() {      // public method
        return bankBalance;
    };
}

var john = new Person('John', 'Smith', 30);
var myFirst = john.firstName;
var myLast = john.lastName;

//declare variable myAge set to the age of the john object.
var myAge = john.age;

console.log(john.bankBalance);

var myBalance = john.getBalance();
console.log(myBalance);

