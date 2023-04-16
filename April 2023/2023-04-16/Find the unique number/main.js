/*
 
 Codewars, 6k: Find the unique number
 
*/

function findUnique(numbers) {
  const seen = numbers.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  
  for (const n of Object.keys(seen)) {
    if (seen[n] === 1) return +n;
  }
};