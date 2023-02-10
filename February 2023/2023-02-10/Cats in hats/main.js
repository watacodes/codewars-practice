/*

Codewars, 7k: Cats in hats

*/

function height(n) {
  let currentUnits = 2000000;
  let currentHeight = 2000000;
  while (n > 0) {
    currentUnits /= 2.5;
    currentHeight += currentUnits;
    n--;
  }
  return currentHeight.toFixed(3);
}