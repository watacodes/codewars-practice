/*

Codewars, 6k: Sum of integer combinations

*/

function find(arr, n) {
  const combini = (a, b, c) => 
    !b ? 1 : a >= arr.length || c >= arr.length || b < 0 ? 0 : combini(a, b-arr[a], c + 1) + combini(a + 1, b, c);
  
  return combini(0, n, 0);
};