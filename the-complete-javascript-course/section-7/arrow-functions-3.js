
/*jshint esnext: true */

'use strict';

/////////////////////////////////
// Lecture: Arrow functions

function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
       return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
};

new Person('Mike').myFriends6(friends);
