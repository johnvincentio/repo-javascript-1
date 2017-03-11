/* jshint browser: true */

document.getElementById('output').innerHTML += ('starting ...');

// Wait half a second before firing the writeEnding() function
var myTimer = window.setTimeout(writeEnding, 500);

document.getElementById('output').innerHTML += ('continuing ...');

// Define the Write Ending Function
function writeEnding() {
    document.getElementById('output').innerHTML += ('ending!');
}
