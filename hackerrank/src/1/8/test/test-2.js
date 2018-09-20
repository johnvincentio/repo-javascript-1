/* global describe, it */

const fs = require('fs');
const should = require('chai').should();

const alpha = fs.readFileSync('./src/1/8/test/input17.txt').toString();
const inputString = alpha
	.trim()
	.split('\n')
	.map(str => str.trim());
console.error('alpha ', alpha);
const a = require('../a');

describe('test-2', () => {
	it.only('1', () => {
		const result = a.main(inputString);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(2);
	});
});
