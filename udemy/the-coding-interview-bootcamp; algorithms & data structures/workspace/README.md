
[Udemy The Coding Interview and Bootcamp; Algorithms & Data Structures](https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure)


[AlgoCasts](https://github.com/StephenGrider/AlgoCasts)


## May need to install Jest

```
sudo npm install -g jest
```

## Run one test

Run for Fib exercise.

```
jest fib/test.js --watch
```

## My Implementation

```
cd workspace/src/exercises
npm i jest --save-dev
```

`package.json`

```
"scripts": {
	"test": "jest $1 --watch"
}
```

to run a test

```
cd workspace/src/exercises
npm run test {folder}
```

for example

```
npm run test chunk
```

## Run Debugger

For example, `reversestring`

Add `debugger` and call

```
function reverse(str) {
	debugger;
	if (!str) {
		return str;
	}
	return str.split('').reduce((c, v) => v + c, '');
}

reverse('abcd');
```

```
cd workspace/src/exercises/reversestring

node inspect index.js

continue
```

Go to REPL mode

```
repl
```

Can query

`str`

