/*

Codewars, 7k: "Center yourself", says the monk.

*/

function center (str, width, fill = ' ') {
  if (str.length >= width) return str;
  let right = fill.repeat(Math.floor((width - str.length) / 2));
  let left = fill.repeat(Math.ceil((width - str.length) / 2));
  return left + str + right;
}