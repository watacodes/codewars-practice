/*

Codewars, 7k: 2D / 1D array coordinates mapping

*/

function to1D(x, y, size) {
  return y * size[0] + x;
}

function to2D(n, size) {
  return [n % size[0], Math.floor(n / size[0])];
}