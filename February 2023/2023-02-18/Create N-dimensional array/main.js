/*

Codewars, 6k: Create N-dimensional array

*/

const createNDimensionalArray = (n, size) => {
  let arr = Array(size).fill(`level ${n}`);
  for (let i = 1; i < n; i++) {
    arr = Array(size).fill(arr);
    console.log(arr)
  }
  return arr;
}

console.log(createNDimensionalArray(2,3));