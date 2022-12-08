/*

Codewars, 7k: A Gift Well Spent

*/

const buy = (val, arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === val) {
        return [i, j];
      }
    }  
  }
  return null;
}