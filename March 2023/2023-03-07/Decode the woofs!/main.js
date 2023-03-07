/*

Codewars, 5k: Decode the woofs!

*/

function woofDecoder(str) {
  const alpha = ' abcdefghijklmnopqrstuvwxyz';
  str = str.toLowerCase().split('!').slice(0, -1);
  const woofCount = str.map(e => e.split('-').filter(e => /w.*o.*o.*f/.test(e)).length);
  if (woofCount.some(e => e > 26)) return 'just barking!';
  if (woofCount.every(e => e === 0)) return 'nothing to decode!';
  return woofCount.filter(e => e !== 0).map(e => alpha[e]).join('');
}




const test1 = "Woof-woof-woof-woof-woof-woof-woof-woof! Woof-woof-woof-woof-woof-woof-woof-woof-woof!"  // "hi"
const test2 = "Woof-woof-woof-woof-woof-woof!Woof-woof-woof-woof-woof! Woof-woof-woof-woof-woof! Woof-woof-woof-woof! Woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof-woof! Woof-woof-woof-woof-woof!" // "feedme"

console.log(woofDecoder(test1));