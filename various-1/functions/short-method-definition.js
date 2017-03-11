/*
Shorthand method definition can be used in a method declaration on object literals and ES6 classes.

You can define them using a function name, followed by a list of parameters in a pair of parenthesis (para1, ..., paramN) and a pair of curly braces { ... } that delimits the body statements.
*/

/*
9/14/2016; not yet supported
*/

/*jshint esnext: true */

/* use a new version of node to test this */

var collection = {
    items: [],
    add(...items) {
        this.items.push(...items);
    },
    get(index) {            // named functions, easier for debugging
        return this.items[index];
    }
};
collection.add('C', 'Java', 'PHP');
collection.get(1); // => 'Java'

class Star {
  constructor(name) {
    this.name = name;
  }
  getMessage(message) {
    return this.name + message;
  }
}
var sun = new Star('Sun');
sun.getMessage(' is shining'); // => 'Sun is shining'
