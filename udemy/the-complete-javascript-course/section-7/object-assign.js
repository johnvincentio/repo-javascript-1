
/*jshint esnext: true */

'use strict';

const objA = {
  foo: 'foo',
  bar: 'bar'
};

const objB = {
  foo: 'something else',
  bizz: 'bizz',
  bang: 'bang'
};

// merges params 2-n into param 1
console.log(Object.assign({}, objA, objB));
