//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'6', //
			'1 4 4 4 5 3' //
		];
		const result = a.main(input);
		result.should.equal(4);
	});

	it('2', () => {
		const input = [
			'11', //
			'1 2 3 4 5 4 3 2 1 3 4' //
		];
		const result = a.main(input);
		result.should.equal(3);
	});
});
