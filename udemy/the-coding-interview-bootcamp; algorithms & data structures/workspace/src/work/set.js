// const text = 'abcda';
// const mySet = new Set(text);
// console.log(' size ', mySet.size); // 4
// console.log('mySet ', mySet); // 'a', 'b', 'c', 'd'

// const numbers = [2, 3, 4, 2, 3, 4, 1];
// console.log([...new Set(numbers)]);	// 2,3,4,1

// const myArray = ['value1', 'value2', 'value3'];
// const mySet = new Set(myArray);
// console.log(mySet.has('value1')); // true

// const array = [...mySet];
// console.log(array); // [ 'value1', 'value2', 'value3' ]

// const obj = { a: 1, b: 2, c: 3 };
// const mySet = new Set();
// mySet.add(1);
// mySet.add(obj);
// console.log('mySet ', mySet); // Set { { a: 1, b: 2, c: 3 } }

// for (const item of mySet) {
// 	console.log(item);
// }

// for (const item of mySet.keys()) {
// 	console.log(item);
// }

// for (const item of mySet.values()) {
// 	console.log(item);
// }

// for (const [key, value] of mySet.entries()) {
// 	console.log(key);
// }

const myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
for (const [key, value] of myMap) {
	console.log(`${key} = ${value}`);
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
	console.log(key);
}
// 0
// 1

for (const value of myMap.values()) {
	console.log(value);
}
// zero
// one

for (const [key, value] of myMap.entries()) {
	console.log(`${key} = ${value}`);
}
