/*

Codewars, 7k: Convert a linked list to a string


*/

function stringify(list) {
  return list === null ? 'null' : `${list.data} -> ${stringify(list.next)}`;
}

