/*

Codewars, 6k: Separate The Wheat From The Chaf

*/

function wheatFromChaff(arr) {
  let head = 0;
  let tail = arr.length - 1;
  
  while (head < tail) {
    if (arr[head] < 0) {
      head++;
    } else if (arr[tail] > 0) {
      tail--;
    } else {
      let temp = arr[head];
      arr[head] = arr[tail];
      arr[tail] = temp;
      head++;
      tail--;
    }
  }
 
  return arr;
}