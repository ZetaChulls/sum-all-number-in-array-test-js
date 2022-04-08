function sumItems(array) {
  let output = 0;
  for(const item of array) {
    if(Array.isArray(item)) {
      output += sumItems(item);
    } else {
      output += item;
    }
  }
  return output;
}

module.exports = sumItems;