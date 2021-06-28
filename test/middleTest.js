const assert = require('chai').assert;
//const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


//Test Code
//assertArraysEqual([1, 2, 3], [1, 2, 3]);
describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});

it("returns [7,4] for [3,7,4,3]", () => {
  assert.deepEqual(middle([3,7,4,3]), [7,4]);
});
