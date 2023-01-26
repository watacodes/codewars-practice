/*

Codewars, 7k: Reducing Problems - Bug Fixing #8

*/

function calculateTotal(team1, team2) {
  const t1Score = team1.reduce((t, c) => t + c, 0);
  const t2Score = team2.reduce((t, c) => t + c, 0);
  return t1Score > t2Score;
}