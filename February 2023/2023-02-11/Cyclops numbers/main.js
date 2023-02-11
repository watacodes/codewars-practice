/*

Codewars, 7k: Cyclops numbers

*/

function cyclops(n) {
  const bin = n.toString(2);
  if (bin.replace(/0/g, '') === bin
    || bin.length % 2 === 0
    || bin.match(/0/g).length > 1) return false;
  if (bin.split('0')[0].length === bin.split(/0/g)[1].length) return true;
  return false;
}