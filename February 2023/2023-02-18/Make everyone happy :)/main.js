/*

Codewars, 6k: Make everyone happy :)

*/

function smile(text) {
  return text.replace(/([:;=][-~]?)([\(\[])/g, (_, p1, p2) => p1 + (p2 === '(' ? ')' : ']'));
}