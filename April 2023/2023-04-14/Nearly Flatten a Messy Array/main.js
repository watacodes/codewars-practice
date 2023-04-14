/*

Codewars, 6k: Nearly Flatten a Messy Array

*/

function nearFlatten(arr, res = []) {
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      nearFlatten(arr[i], res);
    } else {
      res.push(arr);
      i += arr[i].length;
    }
  }
  return res.sort((a, b) => a[0] - b[0]);
}