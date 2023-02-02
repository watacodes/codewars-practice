/*

Codewars, 7k: Wealth equality, finally!

*/

function redistributeWealth(wealth) {
  const average = wealth.reduce((acc, curr) => acc + curr) / wealth.length;
  for (let person in wealth) {
    wealth[person] = average;
  }
}