/*
npm install prompt --save
*/

var _prompt = require('prompt');

// user confirmation required!
_prompt.start();

// disable prefix message & colors
_prompt.message = '';
_prompt.delimiter = '';
_prompt.colors = false;

// wait for user confirmation
_prompt.get({
    properties: {

        // setup the dialog
        confirm: {
            // allow yes, no, y, n, YES, NO, Y, N as answer
            pattern: /^(yes|no|y|n)$/gi,
            description: 'Say what?',
            message: 'Type yes/no',
            required: true,
            default: 'no'
        }
    }
}, function (err, result){
    // transform to lower case
    var c = result.confirm.toLowerCase();

    // yes or y typed ? otherwise abort
    if (c!='y' && c!='yes'){
        console.log('ABORT');
        return;
    }

    // your code
    console.log('Action confirmed');

});


// confirm("Are you ready to play!");

