/*

Codewars, 6k: Ziiiiip!

*/

function zipObject(keys = [], values = []) { 
  return keys.reduce((acc, curr, i) => {
    if (Array.isArray(curr)) {
      acc[curr[0]] = curr[1];
    } else {
      acc[curr] = values[i];
    }
    return acc;
  }, {});
}