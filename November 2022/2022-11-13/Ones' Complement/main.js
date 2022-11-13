/*

Codewars, 7k: Ones' Complement

*/


const onesComplement = n => {
  return [...n].map(a => a === '0' ? '1' : '0').join('');
};

console.log(onesComplement('1101'))