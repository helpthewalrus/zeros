module.exports = function getZerosCount(number) {
  let counter1 = 0;
    
  for (let i = number; i >= 1; i--) {
    if (i % 5 === 0) {
      let t = i;
      while (t % 5 === 0) {
        counter1++;
        t = t / 5;
      }
    }
  }  
return counter1;
}
