//

/*

https://www.hackerrank.com/challenges/magic-square-forming/problem

form-a-magic-square

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function formingMagicSquare(s) {
	const size = s.length;
	const magicConstant = size * ((size ** 2 + 1) / 2);
	console.error('size ', size, ' magicConstant ', magicConstant);
}

/*
A magic square to be an nxn matrix of distinct positive integers from 1 to n**2
	where the sum of any row, column, or diagonal of length n 
		is always equal to the same number: the magic constant.

Print an integer denoting the minimum cost of turning matrix s into a magic square.

*/

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const s = Array(3);
	for (let i = 0; i < 3; i++) {
		// prettier-ignore
		s[i] = readLine().split(' ').map(sTemp => parseInt(sTemp, 10));
	}
	const result = formingMagicSquare(s);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
