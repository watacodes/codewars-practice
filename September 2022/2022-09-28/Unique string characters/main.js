/*

Codewars, 7k: Unique string characters

In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

*/

const solve = (s1, s2) => {
  let s1Arr = s1.split('');
  let s2Arr = s2.split('');
  let res = [];
  for (let i of s1Arr) {
    if (!s2Arr.includes(i)) {
      res.push(i);
    }
  }
  for (let j of s2Arr) {
    if (!s1Arr.includes(j)) {
      res.push(j);
    }
  }
  return res.join('');
}




console.log(solve('xyab', 'xzca'))

