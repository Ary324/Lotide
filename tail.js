
const tail = function(tone) {
  if (tone.length === 0) {
    return tone;
  } else if (tone.length === 1) {
    return "";
  } else {
    let tailedArray = tone.slice(1);
    return tailedArray;
  }
};


module.exports = tail;