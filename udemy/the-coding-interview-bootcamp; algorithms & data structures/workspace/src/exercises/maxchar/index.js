// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */

function maxChar(str) {
	const charMap = {};

	let hv = 0;
	let hk = '';
	for (const char of str) {
		// charMap[char] = charMap[char] + 1 || 1;
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
		// if (charMap[char] > hv) {
		// 	hk = char;
		// 	hv = charMap[char];
		// }
	}

	for (const char in charMap) {
		console.log('char ', char);
		if (charMap[char] > hv) {
			hk = char;
			hv = charMap[char];
		}
	}
	return hk;
}

module.exports = maxChar;
