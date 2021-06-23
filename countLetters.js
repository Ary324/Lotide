const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂🙂🙂Authentication Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙁🙁🙁Authentication Failed: ${actual} !== ${expected}`);
  }
};

const countAppearance =  function(string, key) {
  //input :  string and a letter
  //output :  a number that represents how many times the letter appeared within the string
  let count = 0;
  for (let letter of string) {
    if (letter === key) {
      count++;
    }
  }
  return count;
};


const countLetters = function(string) {
  //input: a string that you want check how many times each letter appears within the string
  //output: an object that displays how many times a letter appeared within the string for all letters that are in the string

  let result = {};

  // removes all the spaces within the string
  let spaceRemovedString = string.split(' ').join('');
  for (let letter of spaceRemovedString) {
    if (letter in result) {
      continue;
    } else {
      let count = countAppearance(spaceRemovedString, letter);
      result[letter] = count;
    }
  }
  return result;

};

console.log(assertEqual(countLetters("LHL")["L"],2));
