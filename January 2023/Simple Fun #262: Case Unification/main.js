/*

Codewars, 7k: Simple Fun #262: Case Unification

*/

function caseUnification(s) {
  if (s === s.toUpperCase() || s === s.toLowerCase()) return s;
  const upper = s.match(/[A-Z]/g).length;
  const lower = s.match(/[a-z]/g).length;
  return upper > lower ? s.toUpperCase() : s.toLowerCase();
}