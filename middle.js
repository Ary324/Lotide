

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

module.exports = middle;