
// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log(typeof anObj); // should print "object"
console.log(typeof aNumber); // should print "number"
console.log(typeof aString); // should print "string"

var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty("shorts"))
    console.log(suitcase.shorts);

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for(var property in nyc) {
    console.log(property);
}

for(var property in nyc) {
    console.log(nyc[property]);
}
