/*

Codewars, 6k: Millipede of words

*/

function solution(words, previous = '') {
  if (words.length === 0) return true;
  for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i][0];
    if (previous && firstLetter !== previous) {
      continue;
    }
    const currentLast = words[i].slice(-1);
    const updatedWords = words.filter((e, idx) => idx !== i);
    if (solution(updatedWords, currentLast)) {
      return true;
    }
  }
  return false;
}

const test1 = ["excavate", "endure", "desire", "screen", "theater", "excess", "night"];

console.log(solution(test1));