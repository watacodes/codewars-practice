/*

Codewars, 7k: Arithmetic Sequence!

*/

const nthterm = (first, n, c) => {
  let num = first;
  let counter = 0;
  while (counter < n) {
    num += c;
    counter++;
  }
  return num;
}