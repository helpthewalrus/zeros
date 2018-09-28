module.exports = function getZerosCount(number) {
  let counter = 0,
      n = 1;
  while (Math.floor(number / 5**n >= 1)) {
    counter += Math.floor(number / 5**n);
    n++;
  }  
  return counter;
}