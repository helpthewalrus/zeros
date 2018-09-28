module.exports = function getZerosCount(number) {
  let counter1 = 0;
  let counter2 = 0;  
  for (let i = number; i >= 1; i--) {
    if (i % 5 === 0) {
      let t = i;
      while (t % 5 === 0) {
        counter1++;
        t = t / 5;
      }
    }
    if (i % 2 === 0) {
      let t = i;
      while (t % 2 === 0) {
        counter2++;
        t = t / 2;
      }
    }
  }
  return (counter1 < counter2) ? counter1 : counter2;
}

//console.log(getZerosCount(15));