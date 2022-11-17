/*

Codewars, 7k: Hamming Distance - Part 1: Binary codes

*/

const hammingDistance = (a, b) => {
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      counter++;
    };
  };
  return counter;
};