// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
//  matrix(5)
//     [[1,  2,  3,  4, 5],
//     [16, 17, 18, 19, 6],
//     [15, 24, 25, 20, 7],
//     [14, 23, 22, 21, 8],
//     [13, 12, 11, 10, 9]]

/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */

function matrix(n) {
	const array = [];
	for (let i = 0; i < n; i++) {
		array.push([]);
	}

	let rowStart = 0;
	let rowEnd = n - 1;
	let colStart = 0;
	let colEnd = n - 1;
	let counter = 1;
	let dir = 1;
	while (counter <= n * n) {
		// console.log('(loop) counter ', counter, ' dir ', dir);
		// console.log('(loop) rowStart ', rowStart, ' rowEnd ', rowEnd);
		// console.log('(loop) colStart ', colStart, ' colEnd ', colEnd);
		if (dir === 1) {
			// top row
			for (let idx = colStart; idx <= colEnd; idx++) {
				array[rowStart][idx] = counter++;
			}
			// console.log('(1) array ', array, ' counter ', counter);
			rowStart++;
			dir = 2;
		} else if (dir === 2) {
			// right column
			for (let idx = rowStart; idx <= rowEnd; idx++) {
				array[idx][colEnd] = counter++;
			}
			// console.log('(2) array ', array, ' counter ', counter);
			colEnd--;
			dir = 3;
		} else if (dir === 3) {
			// bottom row
			for (let idx = colEnd; idx >= colStart; idx--) {
				array[rowEnd][idx] = counter++;
			}
			// console.log('(3) array ', array, ' counter ', counter);
			rowEnd--;
			dir = 4;
		} else if (dir === 4) {
			// left column
			for (let idx = rowEnd; idx >= rowStart; idx--) {
				array[idx][colStart] = counter++;
			}
			// console.log('(4) array ', array, ' counter ', counter);
			colStart++;
			dir = 1;
		} else {
			counter++;
		}
	}
	return array;
}

module.exports = matrix;
