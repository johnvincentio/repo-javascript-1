//

/* global describe, it */

/* eslint-disable no-plusplus */

/**
 * Test game over
 *
 * @module test-game-over
 * @requires Game
 */

const a = require('../a');

describe('test', () => {
	it('basic', () => {
		const jv = a.main(['1 2 3 4 5']);
		console.log('jv ', jv);
		a.main(['1 2 3 4 5']).should.equal('11 14');
	});

	it('game should not be over', () => {
		// const game = new Game();
		// game.isOccupied(5, 3).should.equal(true);
		// game.isOccupied(4, 3).should.equal(true);
		// game.isOccupied(3, 3).should.equal(false);
		// game.from = { row: 5, column: 3, type: 0 };
		// game.nextMove().should.equal(true);
		// game.makeMove().should.equal(true);
		// game.table.counter.should.equal(0);
		// const obj = {
		// 	status: 'OK',
		// 	from: { row: 5, column: 3 },
		// 	via: { row: 4, column: 3 },
		// 	to: { row: 3, column: 3 },
		// 	type: 1
		// };
		// obj.should.be.deep.equal(game.currentMove);
		// obj.should.be.deep.equal(game.table.moves[0]);
		// game.isOccupied(5, 3).should.equal(false);
		// game.isOccupied(4, 3).should.equal(false);
		// game.isOccupied(3, 3).should.equal(true);
	});
});
