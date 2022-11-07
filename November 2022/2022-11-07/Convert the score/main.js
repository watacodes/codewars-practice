/*

Codewars, 7k: Convert the score


*/

const scoreboard = str => {
  const scoreCount = {
    'nil': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  };

  const splitScore = str.split(' ').filter(a => scoreCount.hasOwnProperty(a));
  return splitScore.map(score => scoreCount[score]);
}

console.log(scoreboard('The score is four nil'))