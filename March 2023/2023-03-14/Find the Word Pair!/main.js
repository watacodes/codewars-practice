/*

Codewars, 6k: Find the Word Pair!

*/

function compoundMatch(words, target) {
  const res = [];

  for (let i = 1; i < target.length; i++) {
    const [p1, p2] = [target.slice(0, i), target.slice(i, target.length)];
    const [idx1, idx2] = [p1, p2].map(e => words.indexOf(e));
    if (words.includes(p1) && words.includes(p2)) {
      return idx1 < idx2 ? [p1, p2, [idx1, idx2]] : [p2, p1, [idx1, idx2]];
    }
  }

  return null;
}