/*

Codewars, 6k: String reduction

*/

function solve(a, b) {
  while (b) {
    if (!a.includes(b[0])) return 0;
    const regex = new RegExp(`${b[0]}`);
    a = a.replace(regex, '');
    b = b.slice(1);
  }
  return a.length;
};