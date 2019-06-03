// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function reverse(str) {
	if (!str) return str;
	return str.split('').reduce((c, v) => v + c, '');
}
function palindrome_1(str) {
	return str === reverse(str);
}

function palindrome_reverse(str) {
	// prettier-ignore
	const a = str.split('').reverse().join('');
	return a === str;
}

function palindrome(str) {
	// prettier-ignore
	return str.split('').every((char, index) => {
		const rdx = str.length - index - 1;
		return char === str.substr(rdx, 1);
	});
}

module.exports = palindrome;
