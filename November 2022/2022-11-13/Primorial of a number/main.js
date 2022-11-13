/*

Codewars, 7k: Primorial of a number

*/

const numPrimorial = n => {
  const arr = [2, 3, 5, 7];
  for (let i = 8; i < 51; i++) {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
      arr.push(i);
    };
  };
  return arr.slice(0, n).reduce((acc, curr) => acc * curr);
};

console.log(numPrimorial(3));