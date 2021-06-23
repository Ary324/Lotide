


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


const eqObjects = function(object1, object2) {
  // input : two objects
  // output : a boolean, true if the two input objects are identical, false if they are not

  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);

  let equalKeys = compareKeys(key1, key2);
  let equalObjects = true;

  if (equalKeys === true) {
    for (let key of key1) {
      if (Array.isArray(object1[key])) {
        let equal = eqArrays(object1[key], object2[key]);
        if (equal !== true) {
          equalObjects = false;
          break;
        }
      } else if (object1[key] instanceof Object) {
        equalObjects = eqObjects(object1[key], object2[key]);
      } else {
        let equal = compareValues(object1[key], object2[key]);
        if (equal !== true) {
          equalObjects = false;
          break;
        }
      }
    }
  } else {
    equalObjects = false;
  }

  return equalObjects;
};

const compareKeys = function(arr1, arr2) {
  // input : two arrays
  // output : boolean, true if arr1 is equal to arr 2

  //sort the two input arrays
  arr1 = arr1.sort();
  arr2 = arr2.sort();

  let equal = true;
  //Test to see if arr1 has the same length as arr2
  if (arr1.length === arr2.length) {
    // if the length of arr1 and arr2 are the same, test to see if arr1[index] == arr2[index]
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        equal = true;
      } else {
        equal = false;
        return equal;
      }
    }
  } else {
    equal = false;
    return equal;
  }

  return equal;
};

const compareValues = function(val1, val2) {
  //input: two values, can be string or number
  //output: boolean, true if val1 is equal to val2, false if val1 is not equal to val2
  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let objectsEqual = eqObjects(actual, expected);

  let result = "";
  if (objectsEqual) {
    result += `✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    result += `🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  return result;
};

const ab = { a: "1", b: "2" , d: "6", c: "4"};
const ba = { b: "2", a: "1" , c: "4", d: "6"};
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false
