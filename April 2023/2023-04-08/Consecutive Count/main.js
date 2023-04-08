/*

Codewars, 6k: Consecutive Count

*/

function getConsectiveItems(items, key) {
  const re = new RegExp(`[^${key}]`, 'g');
  const con = items.toString().split(re).filter(e => e).sort((a, b) => b.length - a.length);
  return (con[0] || []).length;
}