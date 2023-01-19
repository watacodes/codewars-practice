/*

Codewars, 7k: Get initials from person name

*/

function toInitials(name) {
  return name.split(' ').map(e => e.slice(0, 1) + '.').join(' ').trim();
}