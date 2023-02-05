/*

Codewars, 7k: Coding 3min : A*B=C

*/

function findAB(numbers, c) {
  for (let i = 0; i < numbers.length; i++) {
    for (let k = numbers.length; k > 0; k--) {
      if (numbers[i] * numbers[k] === c && i !== k) {
        return [numbers[i], numbers[k]];
      }
    }
  }
  return null;
}