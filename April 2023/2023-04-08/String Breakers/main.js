/*

Codewars, 6k: String Breakers

*/

function stringBreakers(n, str) {
  str = str.replace(/\s/g, '');
  let res = '';
  for (let i = 0; i < str.length; i += n) {
    res += str.slice(i, i + n) + '\n';
  }
  return res.trim();
}