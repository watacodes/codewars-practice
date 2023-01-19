/*

Codewars, 7k: Find the Square Root

*/

function squareRoot(x) {
  let sqrt = x / 2;
  let temp = 0;

  while (sqrt !== temp) {
    temp = sqrt;
    sqrt = (x / temp + temp) / 2;
  }
  return sqrt;
}