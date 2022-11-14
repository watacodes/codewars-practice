/*

Codewars, 6k: Array Deep Count

*/

const deepCount = arr => {
  return arr.reduce((acc, curr) => acc + (Array.isArray(curr) ? deepCount(curr) : 0), arr.length);
}

console.log(deepCount([[[[[]]]]]));