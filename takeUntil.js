
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



const takeUntil = function(array, callback) {
  let result = [];



  for (let item of array) {
    let conditionMet = callback(item);
    if (!conditionMet) {
      result.push(item);
    } else {
      break;
    }
  }

  return result;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = [3,6];
const data4 = ["I've", "been", "to", "Hollywood"];



const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');


const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const results3 = assertArraysEqual(takeUntil(data1, x => x > 5),data3);
console.log(results3);

const results4 = assertArraysEqual(takeUntil(data2, x=> x === ','),data4);
console.log(results4);