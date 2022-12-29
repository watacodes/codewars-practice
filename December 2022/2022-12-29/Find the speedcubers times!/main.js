/*

Codewars, 7k: Find the Speedcuber's times!

*/

const cubeTimes = times => {
  const fastestTime = Math.min(...times);
  times.splice(times.indexOf(fastestTime), 1);
  const sortedTimes = times.sort((a, b) => a - b);
  return [Number((sortedTimes.slice(0, 3).reduce((acc, curr) => acc + curr) / 3).toFixed(2)), fastestTime];
}