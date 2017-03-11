/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
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
        console.log(this.question);
        this.answers.forEach(function(item, idx) {
            console.log(idx+': '+item);
        });
    };
    Question.prototype.checkAnswer = function(userAnswer) {
        if (userAnswer === this.correct) {
            console.log("That answer is correct");
        }
        else {
            console.log("That answer is incorrect");
        }
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

    var currentQuestion = getRandomInt(0, questions.length - 1);
    questions[currentQuestion].askQuestion();
    var answer = parseInt(prompt('Please select the correct answer (just type the number), or type exit to quit.'));
    questions[currentQuestion].checkAnswer(answer);

})();
