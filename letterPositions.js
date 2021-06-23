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


const letterPosition = function(sentence) {
  // input : a string
  // output : an object that displays where each letter appears in the string (all the indices will be shown if there are multiple)
  
  let result = {};

  for (let letter of sentence) {
    if (letter in result) {
      continue;
    } else if (letter === " ") {
      continue;
    } else {
      let indices = storeIndex(sentence, letter);
      result[letter] = indices;
    }
  }

  return result;
};

const storeIndex = function(string, key) {
  // input : a string and a letter
  // output : an array that shows where the letter appears within the string

  let indices = [];
  let count = 0;

  for (let letter of string) {
    if (letter === key) {
      indices.push(count);
    }
    count++;
  }

  return indices;
};

console.log(assertArraysEqual(letterPosition("hello").e, [1]));