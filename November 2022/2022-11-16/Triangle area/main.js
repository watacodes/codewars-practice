/*

Codewars, 7k: Triangle area

*/

const tArea = str => {
  const triangleLength = str.split('\n').slice(-2, -1).join('').match(/[.]/g).length;
  return (triangleLength - 1) ** 2 / 2;
}

console.log(tArea('\n.\n. .\n. . .\n'));