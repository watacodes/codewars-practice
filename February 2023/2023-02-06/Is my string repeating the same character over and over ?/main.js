/*

Codewars, 7k: Is my string repeating the same character over and over ?

*/

function hasOneChar(s) {
  return [...s].reverse().join('') === s && s.charAt(0) === s.charAt(Math.floor(s.length / 2));
}