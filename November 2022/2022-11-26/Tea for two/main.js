/*

Codewars, 7k: Tea for two

*/

const tea42 = input => {
  return String(input).replace(/[2]/g, 't');
}

console.log(tea42(9022));