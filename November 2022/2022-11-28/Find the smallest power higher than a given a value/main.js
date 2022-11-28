/*

Codewars, 7k: Find the smallest power higher than a given a value

*/

const findNextPower = (val, pow) => {
  let nthRoot = Math.floor(val ** (1 / pow));
  let poweredNth = nthRoot ** pow;
  while (poweredNth <= val) {
    nthRoot++;
    poweredNth = nthRoot ** pow;
  }
  return poweredNth;
}

console.log(findNextPower(12385, 3))