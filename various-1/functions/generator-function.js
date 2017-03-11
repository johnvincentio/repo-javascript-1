/*
The generator function in JavaScript returns a Generator object. Its syntax is similar to function expression, function declaration or method declaration, just that it requires a star character *.
*/

/*jshint esnext: true */

function* indexGenerator(){
  var index = 0;
  while(true) {
    yield index++;
  }
}

var g = indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1

// or

var obj = {
  *indexGenerator() {
    var index = 0;
    while(true) {
      yield index++;
    }
  }
};

var g = obj.indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1
