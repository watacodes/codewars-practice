/*

Codewars, 7k: Number of Divisions

Calculate how many times a number can be divided by a given number.

Example
For example the number 6 can be divided by 2 two times:

1. 6 / 2 = 3
2. 3 / 2 = 1 remainder = 1

*/

const divisions = (n, div) => {
  if (n === div) return 1;
  
  let counter = 0;
  
  while (n > div) {
    n /= Math.floor(div);
    counter++;
  };

  return counter;
};

console.log(divisions(100, 2));