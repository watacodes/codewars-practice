/*

Codewars, 7k: Counting Array Elements

Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}

*/

const count = arr => {
  return arr.reduce((a, b) => {
    return a[b] ? a[b]++ : a[b] = 1, a;
  }, {});
};

console.log(count(['james', 'james', 'john']));


