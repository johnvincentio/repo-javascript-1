//

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
// const a1 = ['1 2 3 4 5'];
// const a2 = ['1 3 5 7 9'];
// const a3 = ['7 69 2 221 8974'];
// const a4 = ['1 1 2 4 7'];
// const a5 = ['7 1 2 4 7'];
// const a6 = ['7 1 2 1 7'];
// const a6a = ['7 1 2 1 3'];
// const a7 = ['7 7 7 7 7'];
// const a9 = ['1 1 1 1 1'];
// const a10 = ['769082435 210437958 673982045 375809214 380564127'];
// const a10 = ['769,082,435 210,437,958 673,982,045 375,809,214 380,564,127'];
// 2409875779
// 2,409,875,779
// min 1735893734
//     1,735,893,734
// max 2199437821
//     2,199,437,821

// const inputString = a6a;
let inputString = '';

function readLine() {
	return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
	let min = Number.MAX_SAFE_INTEGER;
	console.error('min ', min);
	let max = 1;
	let total = 0;

	for (let i = 0; i < 5; i++) {
		total += arr[i];
		if (arr[i] < min) {
			min = arr[i];
		} else if (arr[i] > max) {
			max = arr[i];
		}
	}
	console.error('total ', total, ' min ', min, ' max ', max);

	const x1 = total - max;
	const x2 = total - min;
	// prettier-ignore
	return `${x1} ${x2}`;

	// console.log(`${x1} ${x2}`);
	// console.log(`${total - max} ${total - min}`);
}

convert.main = function main(input) {
	inputString = input;
	console.error('inputString ', inputString);
	// prettier-ignore
	const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
	console.error('arr ', arr);

	return miniMaxSum(arr);
};
// main();

module.exports = convert;
