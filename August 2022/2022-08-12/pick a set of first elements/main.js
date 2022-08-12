/*

Codewars, 8k: pick a set of first elements

Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];

*/

const first = (a, n = 1) => {
  let arr = [];
  if (n === 0) {
    return arr;
  } else if (a.length < n) {
    return a;
  } else {
    for (let i = 0; i < n; i++) {
      arr.push(a[i]);
    }
  }
  return arr;
}