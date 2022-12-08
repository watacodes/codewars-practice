/*

Codewars, 7k: Genetic Algorithm Series - #3 Crossover

*/

const crossover = (c1, c2, index) => {
  const c1Swap = c2.slice(index);
  const c2Swap = c1.slice(index);
  return [c1.slice(0, index) + c1Swap, c2.slice(0, index) + c2Swap];
}

console.log(crossover('111000', '000110', 3));