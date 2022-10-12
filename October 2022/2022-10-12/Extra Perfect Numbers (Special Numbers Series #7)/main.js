/*

Codewars, 7k: Extra Perfect Numbers (Special Numbers Series #7)

Definition
Extra perfect number is the number that first and last bits are set bits.

Task
Given a positive integer N , Return the extra perfect numbers in range from 1 to N .

*/

// 7 => 111

const extraPerfect = n => {
  let arr = [];
  if (n % 2 === 0) {
    for (let i = 1; i < n; i += 2) {
      arr.push(i);
    }
  } else {
    for (let i = 1; i <= n; i += 2) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(extraPerfect(28));