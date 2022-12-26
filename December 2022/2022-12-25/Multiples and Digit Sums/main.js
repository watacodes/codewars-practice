/*

Codewars, 7k: Multiples and Digit Sums

*/

const procedure = n => {
  const multiples = [];
  let counter = 1;
  while (counter * n <= 100) {
    multiples.push(n * counter);
    counter++;
  }
  const sumOfEachMultiple = multiples.map(a => [...String(a)].reduce((acc, curr) => acc + +curr, 0));
  return sumOfEachMultiple.reduce((acc, curr) => acc + curr, 0);
}