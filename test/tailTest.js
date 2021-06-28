const assert = require('chai').assert;
//const assertEqual = require('../assertEqual');
const tail = require('../tail');


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
describe("#tail", () => {
  it("returns 'Labs' for words", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
});
// no need to capture the return value since we are not checking it



//assertEqual(words.length, 3); // original array should still have 3 elements!