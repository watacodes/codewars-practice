/*

Codewars, 5k: Simple Pig Latin

*/

function pigIt(str) {
  const strArr = str.split(' ').map(word => word.match(/\w/gi) ? word.slice(1) + word.slice(0, 1) + 'ay' : word);
  return strArr.join(' ');
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !