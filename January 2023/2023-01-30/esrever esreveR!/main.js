/*

Codewars, 7k: esrever esreveR!

*/

function esrever(str) {
  return [...str.slice(0, -1)].reverse().join('') + str.slice(-1);
}