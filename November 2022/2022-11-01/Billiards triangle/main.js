/*

Codewars, 7k: Billiards triangle


(1 + x) * x / 2 = num

*/

const pyramid = n => {
  let lev = 0;
  while (n >= lev + 1) {
    lev++;
    n -= lev;
  };
  return lev;
};

console.log(pyramid(10));