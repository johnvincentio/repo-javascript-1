//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it.only('1', () => {
		const input = [
			'1', // test cases

			'2 3', // number of levels, number of enemies at each level

			'3 2 1', // Power of enemy, at the level zero
			'4 5 6',

			'1 2 3', // Bullets of enemy, at the level zero
			'7 8 9'
		];
		a.main(input).should.equal([1, 5]);
	});

	it('2', () => {
		const input = [
			'2', // test cases

			'3 3', // number of levels, number of enemies at each level

			'3 2 1', // Power of enemy, at the level zero
			'1 2 3',
			'3 2 1',

			'1 2 3', // Bullets of enemy, at the level zero
			'3 2 1',
			'1 2 3',

			'3 3',

			'3 2 5',
			'8 9 1',
			'4 7 6',

			'1 1 1',
			'1 1 1',
			'1 1 1'
		];
		a.main(input).should.equal([1, 5]);
	});
});
