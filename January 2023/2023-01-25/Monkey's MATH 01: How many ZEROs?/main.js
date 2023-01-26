/*

Codewars, 7k: Monkey's MATH 01: How many "ZERO"s?

*/

function countzero(s) {
  const one = ['a', 'b', 'd', 'e', 'g', 'o', 'p', 'q', '0', '6', '9', 'D', 'O', 'P', 'Q','R','()'];
  const two = ['%', '&', 'B', '8'];
  let counter = 0;
  if (s.match(/\(\)/g)) counter += s.match(/\(\)/g).length;
  [...s].forEach(e => one.includes(e) ? counter++ : two.includes(e) ? counter += 2 : e);
  return counter;
}