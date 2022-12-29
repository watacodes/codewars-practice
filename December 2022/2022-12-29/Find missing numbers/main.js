/*

Codewars, 7k: Find missing numbers

*/

const findMissingNumbers = arr => {
  const missingNums = [];
  let first = arr[0];
  let last = arr.slice(-1)[0];
  while (first < last) {
    if (!arr.includes(first + 1)) {
      missingNums.push(first + 1);
    }
    first++;
  }
  return missingNums;
}