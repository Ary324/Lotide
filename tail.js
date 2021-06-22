const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂🙂🙂Authentication Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙁🙁🙁Authentication Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(tone) {
  if (tone.length === 0) {
    return tone;
  } else if (tone.length === 1) {
    return "";
  } else {
    let tailedArray = tone.slice(1);
    return tailedArray;
  }
};
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!