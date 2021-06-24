const words = ["ground", "control", "to", "major", "tom"];

const assertArraysEqual = function(arr1, arr2) {
  let status = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        status = false;
      }
    }
  } else {
    status = false;
  }
  if (status === true) {
    console.log(`🙂🙂🙂Authentication Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🙁🙁🙁Authentication Failed: ${arr1} !== ${arr2}`);
  }
};

const map = function(array, callback) {

  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;

};

const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));