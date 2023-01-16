/*

Codewars, 7k: Reduce My Fraction

*/

function reduce(fraction) {
  let temp = 1;
  for (let i = 0; i < fraction[0]; i++) {
    if (fraction[1] % i === 0 && fraction[0] % i === 0) {
      temp = i;
    }
  }
  return [fraction[0] / temp, fraction[1] / temp];
}