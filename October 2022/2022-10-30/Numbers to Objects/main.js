/*

Codewars, 7k: Numbers to Objects

You will be given an array of numbers.

For each number in the array you will need to create an object.

The object key will be the number, as a string. The value will be the corresponding character code, as a string.

Return an array of the resulting objects.

All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.

*/

const numObj = s => {
  const arr = [];
  const arr2 = s.map(String);
  arr2.forEach(e => {
    let obj = {};
    obj[e] = String.fromCharCode(e);
    arr.push(obj);
  });
  return arr;
};

console.log(numObj([118,117,120]));