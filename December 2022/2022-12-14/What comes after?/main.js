/*

Codewars, 7k: What comes after?

*/

const comes_after = (str, l) => {
  const res = [];
  [...str.toLowerCase()].forEach((letter, i) => letter === l ? res.push(str[i+1]) : i);
  return res.filter(a => a !== undefined && a.match(/[a-z]/gi)).join('');
}