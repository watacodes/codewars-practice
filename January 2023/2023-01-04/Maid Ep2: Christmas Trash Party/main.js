/*

Codewars, 7k: Christmas Trash Party

*/

function compareTrash(trash1, trash2) {
  return trash1 == trash2 && Object.is(typeof trash1, typeof trash2);
}