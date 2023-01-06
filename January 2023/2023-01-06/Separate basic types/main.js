/*

Codewars, 7k: Separate basic types

*/

function separateTypes(arr) {
  return arr.reduce((acc, curr) => {
    if (!acc[typeof curr]) {
      acc[typeof curr] = [curr]; 
    } else {
      acc[typeof curr].push(curr);
    }
    return acc;
  }, {});
}