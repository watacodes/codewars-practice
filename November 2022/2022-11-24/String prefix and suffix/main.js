/*

Codewars, 7k: String prefix and suffix

*/

const solve = s => {
  let counter = 0;
  for (let i = 0; i <= s.length / 2; i++) {
    if (s.substring(0, i) == s.substring(s.length - i)) {
      counter = i;
    }
  }
  return counter;
}

console.log(solve('abcabca'));