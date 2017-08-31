/////////////////////////////
// CODING CHALLENGE

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {

    'use strict';

    function getRandomInt(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

    var Question = function(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };

    Question.prototype.askQuestion = function() {
        console.log(' ');
        console.log(this.question);
        this.answers.forEach(function(item, idx) {
            console.log(idx+': '+item);
        });
    };
    Question.prototype.checkAnswer = function(userAnswer, callback) {
        if (userAnswer === this.correct) {
            callback(true);
            console.log("That answer is correct");
            return true;
        }
        console.log("That answer is incorrect");
        return false;
    };

    var questions = [];
    questions.push(new Question('An est despicationes, doctrina fore do pariatur fidelissimae?',
        ['Culpa ea fore', 'Eed proident', 'doctrina nam nostrud'], 2));
    questions.push(new Question('Duis iudicem eiusmod si legam o erure officia?',
        ['doctrina nam', 'Tempor do quibusdam', 'appellat singulis.'], 2));
    questions.push(new Question('Aliqua quo possumus in duis ita aut quis?',
        ['duis dolor veniam pariatur', 'laborum consectetur', 'possumus in duis'], 2));
    questions.push(new Question('Illum est expetendis nam multos?',
        ['laborum varias occaecat', 'aliquip sempiternum quo', 'fore fore qui dolore'], 2));
    questions.push(new Question('Quamquam quid e proident imitarentur ad nam do esse?',
        ['fugiat cernantur et offendit', 'excepteur sunt ubi quibusdam', 'magna ea iudicem est et iis praetermissum'], 2));

    function scoring() {
        var score = 0;
        return function(correct) {
            if (correct) {
                score = +1;
            }
            return score;
        };
    }

    var score = scoring();

    function nextQuestion() {
        var currentQuestion = getRandomInt(0, questions.length - 1);
        questions[currentQuestion].askQuestion();
        var response = prompt('Please select the correct answer (just type the number), or type exit to quit.');
        if (response !== 'exit') {
            questions[currentQuestion].checkAnswer(parseInt(response), score);
            console.log("Your current score is: "+score(false));
            nextQuestion();
        }
    }

    nextQuestion();

})();
