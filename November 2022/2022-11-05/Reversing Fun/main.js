/*

Codewars, 7k: Reversing Fun

012345
 -> 543210
 -> 501234
 -> 504321
 -> 504123
 -> 504132

*/

const flipNumber = n => {
  let numStr = n.split('').reverse();
  for (let i = 1; i <= numStr.length; i++) {
    let head = numStr.slice(0, i);
    let tail = numStr.slice(i, numStr.length).reverse();
    numStr = head.concat(tail);
  };
  return numStr.join('');
};

console.log(flipNumber('012345'));