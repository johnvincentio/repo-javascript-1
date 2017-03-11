/* jshint browser: true */

document.getElementById('output').innerHTML += ('starting ...');

var myTimer = window.setTimeout(function() {
    document.getElementById('output').innerHTML += ('ending!');
}, 500);

document.getElementById('output').innerHTML += ('continuing ...');
