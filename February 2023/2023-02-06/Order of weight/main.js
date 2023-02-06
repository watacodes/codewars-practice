/*

Codewars, 7k: Order of weight

*/

function arrange(arr) {
  const convert = {
    'G': 0,
    'KG': 1,
    'T': 2,
  };
  return arr.sort((a, b) => convert[a.match(/[A-Z]+/)[0]] - convert[b.match(/[A-Z]+/)[0]] || a.match(/[0-9]+/)[0] - b.match(/[0-9]+/)[0]);
}