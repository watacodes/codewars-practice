/*

Codewars, 7k: Return a sorted list of objects

*/

function sortList (sortBy, list) {
  return [...list].sort((a, b) => b[sortBy] - a[sortBy]);
}