/*

Codewars, 7k: Average Fuel Consumption

*/

function solve(before, after) {
  return (after[0] * after[1] - before[0] * before[1]) / (after[1] - before[1]);
};