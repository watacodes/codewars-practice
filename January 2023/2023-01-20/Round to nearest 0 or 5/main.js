/*

Codewars, 7k: Round to nearest 0 or 5

*/

function roundToFive(numbers) {
  return numbers.map(e => Math.round(e)).map(e => e % 5 === 0 ? e : e % 5 <= 2 ? e - (e % 5) : e + (5 - e % 5));
}