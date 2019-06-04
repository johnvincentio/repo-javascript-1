// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/* eslint-disable no-plusplus */

function pyramid(n) {
	const columns = n * 2 - 1;
	for (let row = 1; row <= n; row++) {
		const hashes = row * 2 - 1;
		const outer = (columns - hashes) / 2;
		console.log(`${' '.repeat(outer)}${'#'.repeat(hashes)}${' '.repeat(outer)}`);
	}
}

module.exports = pyramid;
