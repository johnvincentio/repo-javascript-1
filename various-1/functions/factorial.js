/*
Because the function declaration creates a variable in the current scope, alongside with regular function call, it is useful for recursion or detaching event listeners. Contrary to function expressions or arrow functions that do not create binding with the function variable by its name.
*/

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);        // recursive
}

factorial(4); // => 24

