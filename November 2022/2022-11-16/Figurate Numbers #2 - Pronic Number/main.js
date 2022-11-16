/*

Codewars, 7k: Figurate Numbers #2 - Pronic Number

*/

const isPronic = num => {
  const pronics = [];
  for (let i = 0; i <= num; i++) {
    pronics.push(i * (i + 1));
  }
  return pronics.includes(num);
};

console.log(isPronic(24));
