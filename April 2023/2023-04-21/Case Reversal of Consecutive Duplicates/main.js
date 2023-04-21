/*

Codewars, 6k: Case Reversal of Consecutive Duplicates

*/

function reverseCase(string) {
  return string.replace(/([a-zA-Z])\1+/g, e => e.toLowerCase() === e ? e.toUpperCase() : e.toLowerCase());
};