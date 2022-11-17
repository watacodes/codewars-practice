/*

Codewars, 7k: Integer Difference

*/

const intDiff = (arr, n) => {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i];
    for (let k = i + 1; k < arr.length; k++) {
      if (Math.abs(arr[k] - temp) === n) {
        count++;
      }
    }
  };
  return count;
};

console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4))