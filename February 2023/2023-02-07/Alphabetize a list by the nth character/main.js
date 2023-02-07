/*

Codewars, 7k: Alphabetize a list by the nth character

*/

function sortIt(list, n) {
  const wordsArr = list.split(', ');
  return wordsArr.sort((a, b) => a.toLowerCase()[n - 1].localeCompare(b.toLowerCase()[n - 1]) || a.localeCompare(b)).join(', ');
}