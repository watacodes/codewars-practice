/*

Codewars, 5k: Range of Integers in an Unsorted String

*/

function mysteryRange(s, n) {
  const sorted = (s) => [...s].sort((a, b) => +a - +b).join('');
  for (let i = 1; i < 100; i++) {
    let original = sorted(s)
    let temp = sorted([...Array(n).keys()].map(e => e + i).join(''));
    if (original === temp && s.includes(i) && s.includes(i + n - 1)) {
      return [i, i + n - 1];
    }
  }
}