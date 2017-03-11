
var x = 1;      // global
function g () { console.log("in g; x "+x); x = 2; }     // changes global x
function f () { var x = 3; g(); }     // local x

console.log("(1) x "+x);
g();
console.log("(2) x "+x);
f();
console.log("(3) x "+x);
