// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */

function vowels_iter(str) {
	let count = 0;
	const checker = ['a', 'e', 'i', 'o', 'u'];
	for (const char of str.toLowerCase()) {
		if (checker.includes(char)) {
			count++;
		}
	}
	return count;
}

function vowels(str) {
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}
function vowels_ok(str) {
	const letters = /[^AEIOUaeiou]/g;
	return str.replace(letters, '').length;
}
// console.log(makeMap('Hi There!'));
// console.log(makeMap(' Albert of Hapsburg, Elder'));

module.exports = vowels;
