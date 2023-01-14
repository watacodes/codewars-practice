/*

Codewars, 7k: Remove duplication 

*/

function removeDuplication(arr) {
  const occurrence = arr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  
  return Object.keys(occurrence)
               .filter(e => occurrence[e] === 1)
               .map(a => +a);
}