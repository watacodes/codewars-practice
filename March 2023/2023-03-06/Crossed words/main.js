/*

Codewars, 7k: Crossed words

*/

function crossedwords(s1, s2) {
  let res = '';
  let s1Idx = -1;
  let s2Idx = -1;

  for (let i = 0; i < s2.length; i++) {
    if (s1.indexOf(s2[i]) > -1) {
      s1Idx = s1.indexOf(s2[i]);
      s2Idx = i;
      break;
    }
  }

  if (s2Idx == -1) return undefined;

  for (let k = 0; k < s2.length; k++) {
    if (k === s2Idx) {
      res += s1 + '\n';
    } else {
      // fill the row with spaces
      res += s2[k].padStart(s1Idx + 1, ' ').padEnd(s1.length, ' ') + '\n';
    }
  }
  return res;
}

console.log(crossedwords('GRAPHICAL', 'SYNTHETIC'));