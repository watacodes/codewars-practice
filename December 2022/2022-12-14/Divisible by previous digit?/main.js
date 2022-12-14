/*

Codewars, 7k: Divisible by previous digit?

*/

const divisibleByLast = n => {
  const nToArr = [...String(n)];
  return nToArr.map((num, i) => num % nToArr[i - 1] === 0);
}