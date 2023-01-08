/*

Codewars, 6k: Find the odd int

*/

function findOdd(arr) {
  const occurrence = arr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  
  for (const key of Object.keys(occurrence)) {
    if (occurrence[key] % 2) return +key;
  }
  return 0;
}