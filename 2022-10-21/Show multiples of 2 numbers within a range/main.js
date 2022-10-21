/*

Codewars, 7k: Show multiples of 2 numbers within a range

Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

Python, Javascript, Java, Ruby versions: return results in a list/array

NOTICE:

Do NOT worry about checking zeros or negative values.
To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation

*/

const multiples = (s1, s2, s3) => {
  let arr = [];
  for (let i = s1; i < s3; i += s1) {
    if (i % s2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}