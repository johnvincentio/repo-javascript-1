
"use strict";

function submitAnswers() {
    var answers = ["b", "a", "d", "b", "d"];
    var total = 5;
    var score = 0;
    var results = document.getElementById("results");

    // get user input
    var qa = new Array();
    for (var i = 0; i < 5; i++) {
        var tmp = 'q' + (i + 1);
        qa[i] = document.forms["quizForm"][tmp].value;
    }

    for (var j = 0; j < 5; j++) {
        if (qa[j] == null || qa[j] == '') {
            results.innerHTML = "<h3>You missed question "+(j + 1)+"</h3>";
            return false;
        }
    }

    for (var k = 0; k < 5; k++) {
        if (qa[k] == answers[k]) {
            score++;
        }
    }

    results.innerHTML = "<h3>You scored <span>"+score+"</span> out of <span>"+total+"</span";
    return false;
}
