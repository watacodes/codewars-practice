/*

Codewars, 7k: Interweaving strings and removing digits

*/

function interweave(s1, s2) {
  let res = '';
  const longer = Math.max(s1.length, s2.length);
  for (let i = 0; i < longer; i++) {
    if (s1[i]) {
      res += s1[i];
    }
    if (s2[i]) {
      res += s2[i];
    }
  }
  return res.replace(/[0-9]/g, '');
}