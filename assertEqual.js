// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🙂🙂🙂Authentication Passed: " + actual + " === " + expected);
  } else {
    console.log("🙁🙁🙁Authentication Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);