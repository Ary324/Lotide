const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂🙂🙂Authentication Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙁🙁🙁Authentication Failed: ${actual} !== ${expected}`);
  }
};

const countAppearance =  function(array, key) {
  // input : an array and the key that needs to be counted
  // output :  the number of times the key appears in the array
  let count = 0;
  for (let string of array) {
    if (string === key) {
      count++;
    }
  }
  return count;
};


const countOnly = function(allItems, itemsToCount) {
  // input : array of items and an object containing which items to count
  // output: an object that contains the count of all items that need to be counted

  //get the keys from the input object
  let result = {};

  for (let key in itemsToCount) {
  
    if (itemsToCount[key] === true) {
      let count = countAppearance(allItems, key);
      result[key] = count;
    }
  }

  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);