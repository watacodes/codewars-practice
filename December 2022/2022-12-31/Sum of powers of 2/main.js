/*

Codewars, 7k: Sum of powers of 2

*/

const powers = n => {
  const res = [];
  let counter = 1;
  while (n > 0) {
    if (n % 2) {
      res.push(counter);
    }
    counter *= 2;
    n = Math.floor(n / 2);
  }
  return res;
};