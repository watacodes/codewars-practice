/*

Codewars, 6k: N smallest elements in original order

*/

function firstNSmallest(arr, n){
  const arrCopy = arr.slice().sort((a, b) => a - b);
  const res = [];
  let max = arrCopy[n - 1];
  let counter = 0;
  
  for (let i = n - 1; i >= 0; i--) {
    if (arrCopy[i] === max) {
      counter++;
    } else {
      break;
    }
  }
  
  for (const num of arr) {
    if (num < max) {
      res.push(num);
    } else if (num === max && counter > 0) {
      res.push(num);
      counter--;
    }
  }
  
  return res;
}