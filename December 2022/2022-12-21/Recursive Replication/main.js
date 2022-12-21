/*

Codewars, 7k: Recursive Replication

*/

const replicate = (times, number) => {
  if (times <= 0) return [];
  return Array(times).fill(number);
}