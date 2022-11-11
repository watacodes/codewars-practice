/*

Codewars, 7k: String to integer conversion

*/

function myParseInt (str) {
  return str.trim().match(/\D/) ? 'NaN' : +str;
};

console.log(myParseInt('1'))
console.log(myParseInt('  1  '))
console.log(myParseInt('0x10'))
console.log(myParseInt('5 friends'))
console.log(myParseInt('16.5'))