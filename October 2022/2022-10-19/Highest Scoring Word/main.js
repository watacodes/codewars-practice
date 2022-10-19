/*

Codewars, 6k: Highest Scoring Word

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/


const high = x => {
  let wordsArray = x.split(' ');
  let sumOfTheScores = wordsArray.map(w => w.split('').reduce((acc, curr) => acc + (curr.charCodeAt() - 96), 0));
  let idx = sumOfTheScores.indexOf(Math.max(...sumOfTheScores));
  return wordsArray[idx];
};



console.log(high('man i need a taxi up to ubud'));

console.log('a'.charCodeAt() - 96)