/*

Codewars, 7k: Kaprekar Split

*/

function kaprekarSplit(n) {
  const numStr = String(n ** 2);
  for (let i = 0; i < numStr.length; i++) {
    const first = numStr.slice(0, i);
    const second = numStr.slice(i);
    if (+first + +second === n) return i;
  }
  return -1;
}