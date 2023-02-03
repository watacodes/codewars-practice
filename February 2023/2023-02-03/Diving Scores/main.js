/*

Codewars, 7k: Diving Scores

*/

function scoreOfDive(scores, tariff) {
  const validScores = scores.sort((a, b) => a - b).slice(2, -2).reduce((acc, curr) => acc + curr); 
  return (validScores * tariff).toFixed(2);
}