/*

Codewars, 6k: Find Cracker.

*/

function findHack(arr) {
  const cracked = [];

  for (let user of arr) {
    let currentScore = user[1];
    let name = user[0];
    let testScores = user[2];
    
    if (testScores.every(e => e === 'A' || e === 'B') && testScores.length >= 5) {
      currentScore -= 20;
    }
    
    for (const score of testScores) {
      if (score === 'A') currentScore -= 30;
      if (score === 'B') currentScore -= 20;
      if (score === 'C') currentScore -= 10;
      if (score === 'D') currentScore -= 5;
    }

    if (currentScore !== 0) cracked.push(name);
  }

  return cracked;
}

console.log(findHack( [
  ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
  ["name2", 120, ["B", "A", "A", "A"]],
  ["name3", 160, ["B", "A", "A", "A","A"]],
  ["name4", 140, ["B", "A", "A", "C", "A"]]
  ]));