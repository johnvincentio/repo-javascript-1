// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt_1(n) {
	const neg = n < 0;
	const a = Math.abs(n).toString();
	// prettier-ignore
	const b = a.split('').reverse().join('');
	const c = (neg ? '-' : '') + b;
	const d = parseInt(c, 10);
	console.log('d ', d);
	return d;
}

function reverseInt(n) {
	// prettier-ignore
	const e = Math.abs(n).toString().split('').reverse().join('');
	return Math.sign(n) * parseInt(e, 10);
}

module.exports = reverseInt;
