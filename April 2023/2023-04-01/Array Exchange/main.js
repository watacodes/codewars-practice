/*

Codewars, 6k: Array Exchange

*/

function exchangeWith(a, b) {
  const revA = a.slice().reverse();
  const revB = b.slice().reverse();

  a.splice(0, a.length, ...revB);
  b.splice(0, b.length, ...revA);
};