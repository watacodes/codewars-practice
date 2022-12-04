/*

Codewars, 7k: Alternate Square Sum

*/

const alternateSqSum = arr => {
  const evens = arr.filter((a, i) => i % 2);
  const odds = arr.filter((a, i) => i % 2 === 0);
  return evens.reduce((acc, curr) => acc + curr ** 2, 0) + odds.reduce((acc, curr) => acc + curr, 0);
}


console.log(alternateSqSum([1,2,3,4,5]));