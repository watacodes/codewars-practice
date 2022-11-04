/*

Codewars, 7k: Delta Bits

*/

function convertBits(a, b) {
  const diff = (a^b).toString(2);
  return (diff.match(/1/g) || []).length;
}

console.log(convertsBits(31, 14));