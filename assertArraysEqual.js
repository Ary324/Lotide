const assertArraysEqual = function(arr1,arr2) {
  let status = false;
  for (let i = 0; i < arr1.length && i < arr2.length; i++) {
    if (arr1[i] === arr2[i]) {
      status = true;
    } else {
      status = false;
    }
  }
  if (status === true) {
    console.log(`🙂🙂🙂Authentication Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🙁🙁🙁Authentication Failed: ${arr1} !== ${arr2}`);
  }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));