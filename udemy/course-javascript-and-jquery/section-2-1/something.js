// alert("Hey");
// document.write("hey");

var abc = 'abc';
var def = 'def';
if (abc == 'abc') {
    console.log("abc is abc");
}
if (abc == def) {
    console.log("abc is def");
}

var cars = new Array();
cars[0] = 'A1';
cars[1] = 'A2';
cars[2] = 'A3';
console.log (cars[1]);

var more = ['Q1', 'Q2', 'Q3'];

for (var i = 0; i < 3; i++) {
    console.log("i "+i);
}

function sayHi() {
    console.log("sayHI");
}
sayHi();

function sayIt(word) {
    console.log("what: "+word+":");
}
sayIt(23);

function add (num1, num2) {
    return num1 + num2;
}
console.log("Add "+add(3, 9));
