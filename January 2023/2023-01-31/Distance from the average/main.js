/*

Codewars, 7k: Distance from the average

*/

function distancesFromAverage(arr) {
  const average = Math.round(arr.reduce((acc, curr) => acc + curr, 0) / arr.length * 100) / 100;
  return arr.map(e => Math.round((average - e) * 100) / 100);
}