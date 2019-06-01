/*
Find the fibonacci number for any index (position)
*/
/*
1,1,2,3,5,8

0, 1,1,2,3,5,8
*/

function fibonacci(index) {
	if (index < 2) {
		return index;
	}
	return fibonacci(index - 2) + fibonacci(index - 1);
}

console.log('0 ', fibonacci(0) === 0);
console.log('1 ', fibonacci(1) === 1);
console.log('2 ', fibonacci(2) === 1);
console.log('3 ', fibonacci(3) === 2);
console.log('4 ', fibonacci(4) === 3);
console.log('5 ', fibonacci(5) === 5);
console.log('6 ', fibonacci(6) === 8);
