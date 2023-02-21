/*

Codewars, 6k: Character with longest consecutive repetition

*/

function longestRepetition(s) {
  if (s.length === 0) return ['', 0];
  const repeated = s.match(/(.)\1*/g);
  const longest = Math.max(...repeated.map(e => e.length));
  const letter = repeated.sort((a, b) => b.length - a.length)[0][0];
  return [letter, longest];
}