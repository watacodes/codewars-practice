/*

Codewars, 7k: Simple eviternity numbers

*/

function solve(a,b) {
  let counter = 0;
  for (let i = a; i < b; i++) {
    i = String(i);
    if (/^[358]+$/.test(i) && i.replace(/[35]/g, "").length >= i.replace(/[38]/g, "").length && 
      i.replace(/[38]/g, "").length >= i.replace(/[58]/g, "").length) {
      counter++;
    }
  }
  return counter;
}