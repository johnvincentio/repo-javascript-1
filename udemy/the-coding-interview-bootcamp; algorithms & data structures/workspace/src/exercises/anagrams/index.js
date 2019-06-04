// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */

function clean(str) {
	const letters = /[^A-Za-z]/g;
	// prettier-ignore
	return str.replace(letters, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
	return clean(stringA) === clean(stringB);
}

function makeMap(str) {
	const letters = /[^A-Za-z]/g;
	const charMap = {};
	for (const char of str.replace(letters, '').toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	return charMap;
}

function anagrams_good(stringA, stringB) {
	const map1 = makeMap(stringA);
	const map2 = makeMap(stringB);
	if (Object.keys(map1).length !== Object.keys(map2).length) {
		return false;
	}

	for (const char in map1) {
		if (map1[char] !== map2[char]) {
			return false;
		}
	}
	return true;
}

function anagrams_ok(stringA, stringB) {
	const stra = clean(stringA);
	const strb = clean(stringB);
	if (stra.length !== strb.length) {
		return false;
	}

	const charMap = {};
	for (const char of stra) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	for (const char of strb) {
		if (charMap[char]) {
			charMap[char]--;
		} else {
			charMap[char] = -1;
		}
	}

	for (const char in charMap) {
		if (charMap[char] !== 0) {
			return false;
		}
	}
	return true;
}

module.exports = anagrams;
