/*

Codewars, 7k: Calculate Parity bit!

*/

const checkParity = (parity, bin) => {
  if (parity === 'even') {
    return bin.match(/1/g).length % 2 ? 1 : 0;
  } else {
    return bin.match(/1/g).length % 2 ? 0 : 1;
  }
}