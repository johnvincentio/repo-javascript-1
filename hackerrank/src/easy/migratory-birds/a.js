//

/*

https://www.hackerrank.com/challenges/migratory-birds/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

migratory-birds

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function migratoryBirds(arr) {
	console.error('arr ', arr);
}

/*
Print an integer denoting the total number of ways that Lily can portion her 
chocolate bar to share with Ron
*/

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const arrCount = parseInt(readLine().trim(), 10);
	const arr = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map(arrTemp => parseInt(arrTemp, 10));

	const result = migratoryBirds(arr);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
