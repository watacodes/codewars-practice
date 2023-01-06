/*

Codewars, 7k: How much Kata should I complete?

*/

function howMuchTo(uncleScore, current) {
  console.log(requiredScore);
  console.log(solvingScore);
  let rank = 0;
  let solved = 0;
  let score = requiredScore[current];
  if (current.slice(0, 3) !== 'kyu') {
    rank = 1;
  } else {
    rank = +current.slice(-1);
  }
  
  while (uncleScore > score) {
    let currPoints = solvingScore[rank];
    score += currPoints;
    solved++;
    if (rank > 1 && score >= requiredScore[`kyu_${rank - 1}`]) {
      rank--;
    }
  }
  return solved;
}