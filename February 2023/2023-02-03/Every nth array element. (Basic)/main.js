/*

Codewars, 7k: Every nth array element. (Basic)

*/

function every(arr, interval, start) {
  const res = [];
  if (start) {
    for (let i = start; i < arr.length; i += interval) {
      res.push(arr[i]);
    }
  } else {
    for (let i = 0; i < arr.length; interval ? i += interval : i++) {
      res.push(arr[i]);
    }
  }
  return res;
}