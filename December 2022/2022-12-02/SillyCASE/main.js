/*

Codewars, 7k: SillyCASE

*/

const sillycase = silly => {
  const midpoint = silly.length % 2 ? Math.floor(silly.length / 2) + 1 : silly.length / 2;
  const firstHalf = silly.slice(0, midpoint);
  const secondHalf = silly.slice(midpoint);
  return firstHalf.toLowerCase() + secondHalf.toUpperCase();
}

console.log(sillycase('brian'))