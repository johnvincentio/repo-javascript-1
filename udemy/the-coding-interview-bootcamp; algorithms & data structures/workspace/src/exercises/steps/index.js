// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/* eslint-disable no-plusplus */

function steps_1(n, row = 0, stair = '') {
	if (row === n) {
		return;
	}
	if (n === stair.length) {
		console.log(stair);
		steps(n, row + 1);
		return;
	}

	if (stair.length <= row) {
		stair += '#';
	} else {
		stair += ' ';
	}
	steps(n, row, stair);
}

function steps_3(n) {
	for (let row = 1; row <= n; row++) {
		let result = '';
		for (let column = 0; column < n; column++) {
			if (column < row) {
				result += '#';
			} else {
				result += ' ';
			}
		}
		console.log(result);
	}
}

function nextChar_2(str = '', i, m, n) {
	if (i <= n) {
		return nextChar_2(str + (i <= m ? '#' : ' '), i + 1, m, n);
	}
	return str;
}

function steps_2(n) {
	for (let m = 1; m <= n; m++) {
		const result = nextChar_2('', 1, m, n);
		console.log(result);
	}
}

function makeChars_5(m, n) {
	let result = '';
	for (let i = 0; i < n; i++) {
		if (i < m) {
			result += '#';
		} else {
			result += ' ';
		}
	}
	return result;
}

function steps_5(n) {
	for (let m = 1; m <= n; m++) {
		console.log(makeChars_5(m, n));
	}
}

function makeChars_6(char, n) {
	let result = '';
	for (let i = 0; i < n; i++) {
		result += char;
	}
	return result;
}

function steps_6(n) {
	for (let i = 1; i <= n; i++) {
		console.log(`${makeChars_6('#', i)}${makeChars_6(' ', n - i)}`);
	}
}

function steps(n) {
	for (let i = 1; i <= n; i++) {
		console.log(`${'#'.repeat(i)}${' '.repeat(n - i)}`);
	}
}

module.exports = steps;
