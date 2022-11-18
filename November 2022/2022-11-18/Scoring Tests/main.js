/*

Codewars, 7k: Scoring Tests

*/

const scoreTest = (scores, correct, omit, wrong) => {
  let correctCounts = 0;
  let omitCounts = 0;
  let wrongCounts = 0;

  scores.forEach(a => a === 0 ? correctCounts++ : a === 1 ? omitCounts++ : wrongCounts++);

  return correctCounts * correct + omitCounts * omit - wrongCounts * wrong;
};