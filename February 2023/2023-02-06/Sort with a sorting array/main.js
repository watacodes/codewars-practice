/*

Codewars, 7k: Sort with a sorting array

*/

function sort(initial, sort) {
  return initial.sort((a, b) => sort[initial.indexOf(a)] - sort[initial.indexOf(b)]);
}