/*

Codewars, 7k: Password Check - Binary to String

*/

const decodePass = (passArr, bin) => {
  const binToDecimal = bin.split(' ').map(n => parseInt(n, 2))
                                     .map(d => String.fromCharCode(d))
                                     .join('');
  return passArr.includes(binToDecimal) ? binToDecimal : false;
}