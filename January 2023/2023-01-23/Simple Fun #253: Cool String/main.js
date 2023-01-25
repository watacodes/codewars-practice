/*

Codewars, 7k: Simple Fun #253: Cool String

*/

function coolString(s) {
  if (s.length <= 1) return false;
  for (let i = 0; i < s.length - 1; i++) {
    if (s.slice(i, i + 2).toLowerCase() === s.slice(i, i + 2) ||
        s.slice(i, i + 2).toUpperCase() === s.slice(i, i + 2)) {
      return false;
    }
  }
  return true;
}