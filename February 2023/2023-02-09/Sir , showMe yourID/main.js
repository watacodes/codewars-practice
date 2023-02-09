/*

Codewars, 7k: Sir , showMe yourID

*/

function showMe(id) {
  if (id.match(/\s/g)) return false;
  if (id.match(/^[-0-9a-z]/g)) return false;
  return true;
}