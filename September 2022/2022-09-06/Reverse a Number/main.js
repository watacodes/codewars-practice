/*

Codewars, 7k: Reverse a Number

Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1

*/

const reverseNumber = n => {
  let nInArr = n.toString().split('');
  if (nInArr[0] === '-') {
    let minus = '-';
    let arrToNum = nInArr.slice(1);
    return Number(minus + arrToNum.reverse().join(''));
  };
  return Number(nInArr.reverse().join(''));
};

console.log(reverseNumber(-654));