/*

Codewars, 6k: Tribonacci Sequence


*/

const tribonacci = (signature, n) => {
  if (n < signature.length) return signature.slice(0, n)
  if (n === 0) return [];
  let counter = 3
  let lastThree = signature;
  let arr = signature;
  while (counter < n) {
    arr.push(lastThree.reduce((acc, curr) => acc + curr, 0));
    lastThree = arr.slice(arr.length - 3, arr.length)
    counter++;
  }
  return arr;
}

console.log(tribonacci([1,1,1], 10));