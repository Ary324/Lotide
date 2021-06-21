const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂🙂🙂Authentication Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🙁🙁🙁Authentication Failed: ${actual} !== ${expected}`);
  }
};

const head = function(noms) {
  return noms[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");