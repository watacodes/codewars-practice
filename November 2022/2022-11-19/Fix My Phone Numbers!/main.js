/*

Codewars, 7k: Fix My Phone Numbers!

*/

const valid = '02078834982'
const invalid ='efRFS:)0207ERGQREG88349F82!';

const isItANum = str => {
  str = str.replace(/[^0-9]/g, '');
  const regex = /^0\d{10}$/;
  return str.match(regex) ? str : 'Not a phone number';
};

console.log(isItANum(valid));

console.log(isItANum(invalid));