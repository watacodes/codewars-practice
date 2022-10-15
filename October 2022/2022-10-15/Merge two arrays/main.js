/*

Codewars, 7k: Merge two arrays

Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

*/


const mergeArrays = (a, b) => {
  let merged = [];
  let maxLen = Math.max(a.length, b.length);
  for (let i = 0; i < maxLen; i++) {
    merged.push(a[i], b[i]);
  }
  return merged.filter(a => a)
};

console.log(mergeArrays(['a', 'b', 'c'], [1,2,3,4,5]));
