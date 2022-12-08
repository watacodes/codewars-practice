/*

Codewars, 7k: Simple Fun #13: Magical Well

*/

const magicalWell = (a, b, n) => {
  let counter = 0;
  let res = 0;
  while (counter < n ) {
    res += a * b;
    a++, b++, counter++;
  }
  return res;
}

console.log(magicalWell(1, 2, 2))