/*

Codewars, 7k: Larger Product or Sum

*/

const sumOrProduct = (arr, n) => {
  const sortedArr = arr.sort((a, b) => a - b);
  const nthSmallest = sortedArr.slice(0, n);
  const nthLargest = sortedArr.slice(-n);
  const sum = nthLargest.reduce((acc, curr) => acc + curr, 0);
  const product = nthSmallest.reduce((acc, curr) => acc * curr, 1);
  return sum > product ? 'sum' : sum === product ? 'same' : 'product';
};

console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));