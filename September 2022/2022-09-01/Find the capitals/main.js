/*

Codewars, 7k: Find the capitals

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/

const capitals = str => str.split('').reduce((a, b, i) => {
  if (b.toUpperCase() === b) {
    a.push(i);
  }
  return a
} , []);

console.log(capitals('CodEWaRs'));