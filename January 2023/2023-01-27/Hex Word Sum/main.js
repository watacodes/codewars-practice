/*

Codewars, 7k: Hex Word Sum

*/

function hexWordSum(str) {
  if (str.length === 0) return 0;
  const strArr = str.split(' ').map(e => e.replace(/[S]/g, '5').replace(/[O]/g, '0'));
  return strArr.reduce((acc, curr) => curr.match(/[^ABCDEF05]/g) ? acc += 0 : acc += parseInt(curr, 16), 0);
}