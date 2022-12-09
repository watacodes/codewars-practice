/*

Codewars, 7k: Count cubes in a Menger Sponge

*/

const calc_ms = n => {
  let nPow = 2 ** n;
  let zeros = '0'.repeat(n);
  return Number(+nPow + zeros);
}

console.log(calc_ms(5))