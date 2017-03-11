function Cat(age, color) {
    this.age = age;
    this.color = color;
}

// make a Dog constructor here
function Dog(age, color) {
    this.age = age;
    this.color = color;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);

console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);

function Rectangle(height, width) {
    this.height = height;
    this.width = width;
    this.calcArea = function() {
        return this.height * this.width;
    };
    this.calcPerimeter = function() {
        return (this.height + this.width) * 2;
    };
}

var rex = new Rectangle(7, 3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();
