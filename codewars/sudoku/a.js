/*
Write a function done_or_not passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

Sudoku rules:

Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

*/

/* jshint node: true */

var assert = require("assert");

function isInvalid(arr) {
    var buckets = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var num in arr) {
        if (arr[num] >= 1 && arr[num] <= 9) buckets[arr[num]-1]++;
    }
    for (var i = 0; i < 9; i++) {
        if (buckets[i] !== 1) {
            return true;
        }
    }
    return false;
}

function getRow(board, row) {
    if (row < 0 || row > 8) {
        return [];
    }
    return board[row];
}
function getColumn(board, col) {
    if (col < 0 || col > 8) {
        return [];
    }
    var arr = [];
    for (var i = 0; i < 9; i++) {
        arr[i] = board[i][col];
    }
    return arr;
}
function getSquare(board, row, col) {
    if (row < 0 || row > 2 || col < 0 || col > 2) {
        return [];
    }
    var arr = [];
    var i = 0;
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            arr[i++] = board[row*3 + x][col*3 + y];
        }
    }
    return arr;
}

function handleChecks(board) {
    for (var i = 0; i < 9; i++) {
        if (isInvalid(getRow(board, i))) {
            return false;
        }
    }
    for (var j = 0; j < 9; j++) {
        if (isInvalid(getColumn(board, j))) {
            return false;
        }
    }
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            if (isInvalid(getSquare(board, x , y))) {
                return false;
            }
        }
    }
    return true;
}
function doneOrNot(board){
    return handleChecks(board) ?  'Finished!' : 'Try again!';
}

assert.equal(true, isInvalid([1, 1, 3, 4, 5, 6, 7, 8, 9]));
assert.equal(false, isInvalid([1, 2, 3, 4, 5, 6, 7, 8, 9]));

var board = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
             [6, 7, 2, 1, 9, 5, 3, 4, 8],
             [1, 9, 8, 3, 4, 2, 5, 6, 7],
             [8, 5, 9, 7, 6, 1, 4, 2, 3],
             [4, 2, 6, 8, 5, 3, 7, 9, 1],
             [7, 1, 3, 9, 2, 4, 8, 5, 6],
             [9, 6, 1, 5, 3, 7, 2, 8, 4],
             [2, 8, 7, 4, 1, 9, 6, 3, 5],
             [3, 4, 5, 2, 8, 6, 1, 7, 9]];

assert.deepEqual(getRow(board, -1), []);
assert.deepEqual(getRow(board, 9), []);
assert.deepEqual(getRow(board, 0), [5, 3, 4, 6, 7, 8, 9, 1, 2]);
assert.deepEqual(getRow(board, 1), [6, 7, 2, 1, 9, 5, 3, 4, 8]);

assert.deepEqual(getColumn(board, -1), []);
assert.deepEqual(getColumn(board, 9), []);
assert.deepEqual(getColumn(board, 0), [5, 6, 1, 8, 4, 7, 9, 2, 3]);
assert.deepEqual(getColumn(board, 8), [2, 8, 7, 3, 1, 6, 4, 5, 9]);

assert.deepEqual(getSquare(board, -1, -1), []);
assert.deepEqual(getSquare(board, 3, 3), []);
assert.deepEqual(getSquare(board, 0, -1), []);
assert.deepEqual(getSquare(board, -1, 0), []);
assert.deepEqual(getSquare(board, -1, 0), []);
assert.deepEqual(getSquare(board, 0, -1), []);

assert.deepEqual(getSquare(board, 0, 0), [5, 3, 4, 6, 7, 2, 1, 9, 8]);
assert.deepEqual(getSquare(board, 1, 0), [8, 5, 9, 4, 2, 6, 7, 1, 3]);
assert.deepEqual(getSquare(board, 2, 0), [9, 6, 1, 2, 8, 7, 3, 4, 5]);

assert.deepEqual(getSquare(board, 0, 1), [6, 7, 8, 1, 9, 5, 3, 4, 2]);
assert.deepEqual(getSquare(board, 1, 1), [7, 6, 1, 8, 5, 3, 9, 2, 4]);
assert.deepEqual(getSquare(board, 2, 1), [5, 3, 7, 4, 1, 9, 2, 8, 6]);

assert.deepEqual(getSquare(board, 0, 2), [9, 1, 2, 3, 4, 8, 5, 6, 7]);
assert.deepEqual(getSquare(board, 1, 2), [4, 2, 3, 7, 9, 1, 8, 5, 6]);
assert.deepEqual(getSquare(board, 2, 2), [2, 8, 4, 6, 3, 5, 1, 7, 9]);

assert.deepEqual(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                         [6, 7, 2, 1, 9, 5, 3, 4, 8],
                         [1, 9, 8, 3, 4, 2, 5, 6, 7],
                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 4, 5, 2, 8, 6, 1, 7, 9]]), "Finished!");

assert.deepEqual(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                         [6, 7, 2, 1, 9, 0, 3, 4, 9],
                         [1, 0, 0, 3, 4, 2, 5, 6, 0],
                         [8, 5, 9, 7, 6, 1, 0, 2, 0],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 0, 1, 5, 3, 7, 2, 1, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 0, 0, 4, 8, 1, 1, 7, 9]]), "Try again!");
