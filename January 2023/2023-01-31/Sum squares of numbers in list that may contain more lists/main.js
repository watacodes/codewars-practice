/*

Codewars, 7k: Sum squares of numbers in list that may contain more lists

*/

function SumSquares(l) {
  const flatArr = l.flat(Infinity);
  return flatArr.reduce((acc, curr) => acc + curr ** 2, 0);
}