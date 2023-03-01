/*

Codewars, 7k: Sum a list but ignore any duplicates

*/

function sumNoDuplicates(arr) {
  const occurrence = arr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  
  const onlyUnique = Object.entries(occurrence).filter(e => e[1] === 1);
  return onlyUnique.reduce((acc, curr) => acc + +(curr[0]), 0);
}