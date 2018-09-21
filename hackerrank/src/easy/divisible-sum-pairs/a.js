//

/*

https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

divisible-sum-pairs

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function divisibleSumPairs(n, k, ar) {}

/*
Print an integer denoting the total number of ways that Lily can portion her 
chocolate bar to share with Ron
*/

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const nk = readLine().split(' ');
	const n = parseInt(nk[0], 10);
	const k = parseInt(nk[1], 10);
	const ar = readLine()
		.split(' ')
		.map(arTemp => parseInt(arTemp, 10));

	const result = divisibleSumPairs(n, k, ar);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
