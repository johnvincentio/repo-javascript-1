function Person(name) {
    this.name = name;
}

Person.prototype.greet = function (otherName) {
    return "Hi " + otherName + ", my name is " + this.name;
}

var js = new Person("john");

console.log ("js "+js.name);

var a1 = js.greet("other");

console.log("a1 "+a1);
