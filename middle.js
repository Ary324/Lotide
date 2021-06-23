const eqArrays = function(arr1,arr2) {
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
  return status;
};

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

const middle = function(arr1) {
  let outputArray = [];
  let middleIndex = 0;

  if (arr1.length <= 2) {
    return outputArray;
  } else {
    // see if the input array is even or odd
    if (arr1.length % 2 === 0) {
      middleIndex = (arr1.length / 2) - 1;
      outputArray.push(arr1[middleIndex]);
      middleIndex = (arr1.length / 2);
      outputArray.push(arr1[middleIndex]);
      return outputArray;
    } else {
      middleIndex = Math.ceil((arr1.length / 2) - 1);
      outputArray.push(arr1[middleIndex]);
      return outputArray;
    }
  }
};

//Test Code

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.log(middle([1,2,3]));
console.log(middle([3,7,4,3]));