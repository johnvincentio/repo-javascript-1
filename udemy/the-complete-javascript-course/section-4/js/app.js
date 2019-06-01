/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

'use strict';

$(function() {

    var scores, roundScore, activePlayer = 1;

    var $new_game = $('.js--new-game');
    var $roll_dice = $('.js--roll-dice');
    var $hold = $('.js--hold');
    var $dice = $('.js--dice');

    var $score = [$('#score-0'), $('#score-1')];
    var $currentScore = [$('#current-0'), $('#current-1')];

    var $panels = [$('div.player-0-panel'), $('div.player-1-panel')];
    var $playerNames = [$('div.player-0-panel .player-name'), $('div.player-1-panel .player-name')];

    function init() {
        $dice.hide();
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
        var die = getRandomInt(1, 6);
        $dice.attr('src', 'images/dice-'+die+'.png');
        $dice.show();
        if (die === 1) {
            $dice.hide(1000);
            roundScore = 0;
            setCurrentScore(activePlayer, roundScore);
            setActiveClass(activePlayer, false);
            togglePlayer();
            setActiveClass(activePlayer, true);
            return;
        }
        roundScore += die;
        setCurrentScore(activePlayer, roundScore);
    });

    $hold.on('click', function() {
        scores[activePlayer] += roundScore;
        setScore(activePlayer, scores[activePlayer]);
        if (scores[activePlayer] >= 100) {
            $dice.hide(1000);
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
        return Math.floor((Math.random() * (to - from + 1)) + from);
    }
});
