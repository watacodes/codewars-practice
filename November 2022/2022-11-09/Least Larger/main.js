/*

Codewars, 7k: Least Larger

Task
Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

*/

const leastLarger = (arr, i) => {
  const target = arr[i];
  const res = [];
  for (let k in arr) {
    if (arr[k] > target) {
      res.push(arr[k]);
    }
  }
  return arr.indexOf(Math.min(...res));
}

console.log(leastLarger([1, 3, 5, 2, 4], 0))