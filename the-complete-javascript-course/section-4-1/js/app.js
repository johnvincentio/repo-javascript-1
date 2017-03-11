/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

'use strict';

$(function() {

    var scores, roundScore, activePlayer = 1;

    var $new_game = $('.js--new-game');
    var $roll_dice = $('.js--roll-dice');
    var $hold = $('.js--hold');
    var $dice = [$('.js--dice-1'), $('.js--dice-2')];

    var $score = [$('#score-0'), $('#score-1')];
    var $currentScore = [$('#current-0'), $('#current-1')];

    var $panels = [$('div.player-0-panel'), $('div.player-1-panel')];
    var $playerNames = [$('div.player-0-panel .player-name'),
                        $('div.player-1-panel .player-name')];

    function init() {
        $dice[0].hide(); $dice[1].hide();
        scores = [0, 0];
        roundScore = 0;
        setScore(0, 0); setScore(1, 0);
        setCurrentScore(0, 0); setCurrentScore(1, 0);

        setPlayerText(0, 'Player 1'); setPlayerText(1, 'Player 2');
        setWinnerClass(0, false); setWinnerClass(1, false);

        setActiveClass(activePlayer, false);
        togglePlayer();
        setActiveClass(activePlayer, true);

        $roll_dice.show();
        $hold.show();
    }

    $new_game.on('click', function() {
        init();
    });

    $roll_dice.on('click', function() {
        var die1 = getRandomInt(1, 6);
        var die2 = getRandomInt(1, 6);
        $dice[0].attr('src', 'images/dice-'+die1+'.png');
        $dice[1].attr('src', 'images/dice-'+die2+'.png');
        $dice[0].show(); $dice[1].show();
        if (die1 === 1 || die2 == 1) {
            $dice[0].hide(1000); $dice[1].hide(1000);
            roundScore = 0;
            setCurrentScore(activePlayer, roundScore);
            setActiveClass(activePlayer, false);
            togglePlayer();
            setActiveClass(activePlayer, true);
            return;
        }
        roundScore += die1 + die2;
        setCurrentScore(activePlayer, roundScore);
    });

    $hold.on('click', function() {
        scores[activePlayer] += roundScore;
        setScore(activePlayer, scores[activePlayer]);
        if (scores[activePlayer] >= 100) {
            $dice[0].hide(1000); $dice[1].hide(1000);
            $roll_dice.hide();
            $hold.hide();
            setActiveClass(activePlayer, false);
            setWinnerClass(activePlayer, true);
            setPlayerText(activePlayer, 'Winner!');
            return;
        }
        roundScore = 0;
        setCurrentScore(activePlayer, roundScore);
        setActiveClass(activePlayer, false);
        togglePlayer();
        setActiveClass(activePlayer, true);
    });

    init();

    function setActiveClass(player, active) {
        if (active) {
            $panels[player].addClass('active');
        }
        else {
            $panels[player].removeClass('active');
        }
    }
    function setWinnerClass(player, active) {
        if (active) {
            $panels[player].addClass('winner');
        }
        else {
            $panels[player].removeClass('winner');
        }
    }
    function setPlayerText(player, text) {
        $playerNames[player].text(text);
    }
    function togglePlayer() {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // jshint ignore:line
    }
    function setScore(player, score) {
        $score[player].text(score);
    }
    function setCurrentScore(player, score) {
        $currentScore[player].text(score);
    }
    function getRandomInt(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }
});
