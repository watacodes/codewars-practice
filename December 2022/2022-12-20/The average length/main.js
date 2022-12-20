/*

Codewars, 7k: The average length

*/

const averageLength = arr => {
  const average = Math.round(arr.reduce((acc, curr) => acc + curr.length, 0) / arr.length);
  return arr.map(a => a.charAt(0).repeat(average));
}