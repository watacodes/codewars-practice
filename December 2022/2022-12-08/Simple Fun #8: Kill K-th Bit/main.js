/*

Codewars, 7k: Simple Fun #8: Kill K-th Bit

*/

const killKthBit = (n, k) => {
  let nToBinary = [...n.toString(2)];
  nToBinary[nToBinary.length - k] = '0';
  return parseInt(nToBinary.join(''), 2);
}

console.log(killKthBit(37, 3))