/*

Codewars, 7k: Insert dashes

Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).

*/

const insertDash = n => {
  let arr = n.toString().split('');
  return arr.map((a, i) => a % 2 === 1 && arr[i+1] % 2 === 1 ? a + '-' : a).join('');
};

console.log(insertDash(454793));