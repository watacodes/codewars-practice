/*

Codewars, 7k: Train to remove duplicates from an array with filter()

*/

const unique = arr => {
  return [...new Set(arr)].filter(a => a || !a);
}

const testArr = [1,1,1,2,2,3];

console.log(unique(testArr));