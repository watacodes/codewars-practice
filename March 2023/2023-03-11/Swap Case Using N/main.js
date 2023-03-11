/*

Codewars, 6k: Swap Case Using N

*/

function swap(s, n) {
  const nBin = n.toString(2);
  let sCount = s.length;
  let repeatedBin = '';
  while (sCount > 0) {
    repeatedBin += nBin;
    sCount -= nBin.length;
  }
  const indices = [];
  [...s].forEach((e, i) => /[^a-z]/gi.test(e) ? indices.push(i) : e);
  repeatedBin = [...repeatedBin];
  indices.forEach((e, i) => repeatedBin.splice(e, 0, 'x'));

  const res = [];
  for (let i = 0; i < s.length; i++) {
    if (repeatedBin[i] === '1') {
      if (s[i].toUpperCase() === s[i]) {
        res.push(s[i].toLowerCase());
      } else {
        res.push(s[i].toUpperCase());
      }
    } else {
      res.push(s[i]);
    }
  }
  return res.join('');
}