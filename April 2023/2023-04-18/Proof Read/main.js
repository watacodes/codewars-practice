/*

Codewars, 6k: Proof Read

*/

function proofread(str) { 
  str = str.toLowerCase().split('.').map(e => e.charAt(0) !== ' ' ? e.charAt(0).toUpperCase() + e.slice(1) : ' ' + e.charAt(1).toUpperCase() + e.slice(2)).join('.');
  return str.replace(/(i)(e)/gi, (_, p1, p2) => p2 + p1);
};