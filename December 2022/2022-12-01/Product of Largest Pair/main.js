/*

Codewars, 7k: Product of Largest Pair

*/

const maxProduct = arr => {
  const largest = Math.max(...arr);
  arr.splice(arr.indexOf(largest), 1);
  const secondLargest = Math.max(...arr);
  return largest * secondLargest;
}