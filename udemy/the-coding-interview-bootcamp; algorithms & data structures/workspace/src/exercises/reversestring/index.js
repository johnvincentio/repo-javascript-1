// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse_split(str) {
	return str
		.split('')
		.reverse()
		.join('');
}

function reverse_substr(str) {
	if (!str || str.length < 2) {
		return str;
	}
	let result = '';
	for (let i = str.length - 1; i >= 0; i--) {
		result += str.substr(i, 1);
	}
	return result;
}

function reverse_substring(str) {
	if (!str || str.length < 2) {
		return str;
	}
	let result = '';
	for (let i = str.length - 1; i >= 0; i--) {
		result += str.substring(i, i + 1);
	}
	return result;
}

function reverse(str) {
	if (!str || str.length < 2) {
		return str;
	}
	let result = '';
	for (const chr of str) {
		result = chr + result;
	}

	return result;
}

module.exports = reverse;
