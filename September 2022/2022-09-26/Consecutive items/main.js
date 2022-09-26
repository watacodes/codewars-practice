/*

Codewars, 7k:  Consecutive items

You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.


*/

const consecutive = (arr, a, b) => {
  for (let i in arr) {
    if (arr[i] === a) {
      if (arr[i - 1] === b || arr[i + 1] === b) {
        return true;
      }
    }
    
    if (arr[i] === b) {
      if (arr[i - 1] === a || arr[i + 1] === a) {
        return true;
      }
    }
  }
  return false;
};

