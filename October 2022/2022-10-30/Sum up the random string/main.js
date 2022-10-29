/*

Codewars, 7k: Sum up the random string

Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.

*/

const sumFromString = str => {
  const arr = str.split(/\D/g);
  return arr.map(a => a.match(/\d/g) ? a.replace(/\D/g, '') : a)
            .filter(a => Number.isInteger(+a))
            .reduce((acc, curr) => acc + +curr, 0);
};

console.log(sumFromString("a30561ff4fb19170aa598b1431b52edad1fcc3e0"))