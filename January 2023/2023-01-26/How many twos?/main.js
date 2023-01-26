/*

Codewars, 7k: How many twos?

*/

function twoCount(num) {
  let counter = 0;
  while (n % 2 === 0) {
    counter++;
    n /= 2;
  }
  return counter;
}