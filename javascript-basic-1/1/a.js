var inherits = function (ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
};

/*
 This is a class which is same as Person.prototype = {};
 Person is the constructor, or the module.
*/
var Person = function(name) {
    this.name = name.toLowerCase();
};

Person.prototype.sayName = function() {
    console.log("My name is "+this.name);
};
Person.prototype.shoutName = function() {
    console.log("My name is "+this.name+"!");
};

var john = new Person("john");
var bobby = new Person("bobby");

console.log(john.name);
john.sayName();
bobby.shoutName();

var Musician = function(name, instrument) {
    Musician.super_.call(this, name);
    this.instrument = instrument;
};

inherits(Musician, Person);

Musician.prototype.getInstrument = function() {
    console.log("My instrument is "+this.instrument+"!");
};
Musician.prototype.shoutName = function() {
    console.log("My shouted name is "+this.name.toUpperCase()+"!");
};

var julia = new Musician("julia", "trombone");
julia.sayName();
julia.shoutName();
julia.getInstrument();

delete Musician.prototype.shoutName;
julia.shoutName();
