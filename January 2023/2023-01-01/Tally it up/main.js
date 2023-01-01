/*

Codewars, 7k: Tally it up

*/

const scoreToTally = score => {
  const alphaToScore = { 1: 'a', 2: 'b', 3: 'c', 4: 'd' };
  if (alphaToScore[score]) return alphaToScore[score];
  let repeatCount = Math.floor(score / 5);
  let restCount = score % 5;
  return 'e <br>'.repeat(repeatCount) + (alphaToScore[restCount] || '');
}