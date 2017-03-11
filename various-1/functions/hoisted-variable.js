// Hoisted variable
/*
The function variable is hoisted up to the top of the current scope, which means that the function can be invoked before the declaration.
Also the created function is named, which means that name property of the function object holds its name. It is useful when viewing the call stack: in debugging or error messages reading.
*/

console.log(hello('Aliens')); // => 'Hello Aliens!'

// Named function
console.log(hello.name);        // => 'hello'; is the function name

// Variable holds the function object
console.log(typeof hello);      // => 'function'

function hello(name) {
    return 'Hello '+name+'!';
}
