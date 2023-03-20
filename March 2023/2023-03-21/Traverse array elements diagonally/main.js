/*

Codewars, 6k: Traverse array elements diagonally

*/

function diagonal(arr) {
  if (arr.length <= 1) return arr[0];
  
  const res = [];
  let maxLen = arr.length - 1;
  
  while(arr[0].length) {
    arr.forEach((e, i) => {
      if (!e.length) {
        return;
      } else if (i >= maxLen) {
        res.push(e.pop());
      }
    });
    
    maxLen--;
  }
  
  return res;
}