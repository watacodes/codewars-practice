/*

Codewars, 7k: Hamming Distance

*/

function hamming(a, b) {
  let counter = 0;
  [...a].forEach((e, i) => e !== b[i] ? counter++ : counter);
  return counter;
}