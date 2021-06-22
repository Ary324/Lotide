const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂🙂🙂Authentication Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙁🙁🙁Authentication Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1,arr2) {
  let status = false;
  for (let i = 0; i < arr1.length && i < arr2.length; i++) {
    if (arr1[i] === arr2[i]) {
      status = true;
    } else {
      status = false;
    }
  }
  return status;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);