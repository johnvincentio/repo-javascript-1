// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */

function chunk_good(array, size) {
	const result = [];
	for (let i = 0; i < array.length; ) {
		result.push(array.slice(i, i + size));
		i += size;
	}
	return result;
}

function chunk(array, size) {
	const result = [];
	let index = 0;
	while (index < array.length) {
		result.push(array.slice(index, index + size));
		index += size;
	}
	return result;
}

function chunk_bit_long(array, size) {
	const result = [];
	let block = [];
	for (let i = 0; i < array.length; i++) {
		if (block.length < size) {
			block.push(array[i]);
		} else {
			result.push(block);
			block = [array[i]];
		}
		if (i === array.length - 1) {
			result.push(block);
		}
	}
	return result;
}

function chunk_pp(array, size) {
	const result = [];
	for (const element of array) {
		const last = result[result.length - 1];
		if (!last || last.length === size) {
			result.push([element]);
		} else {
			last.push(element);
		}
	}
	return result;
}

module.exports = chunk;
