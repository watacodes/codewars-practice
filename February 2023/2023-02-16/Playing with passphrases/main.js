/*

Codewars, 6k: Playing with passphrases

*/

function playPass(s, n) {
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  s = s.replace(/[A-Z]/g, (e) => alpha.indexOf(e) + n < 26 ? alpha[alpha.indexOf(e) + n] : alpha[(alpha.indexOf(e) + n) % 26]);
  s = s.replace(/[0-9]/g, (n) => 9 - +n);
  const downAndUp = [...s].map((e, i) => i % 2 && /[A-Z]/g.test(e) ? e.toLowerCase() : e);
  return downAndUp.reverse().join('')
}