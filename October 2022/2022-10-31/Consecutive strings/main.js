/*

Codewars, 7k: Consecutive strings

*/

const longestConsec = (arr, k) => {
  if (arr.length < k || k < 0 || k >= arr.length) return '';
  if (k === 1) return arr.sort((a, b) => b.length - a.length)[0];
  
  let longestStr = '';
  let newStr = '';
  for (let i = 0; i < arr.length; i++) {
    newStr = arr.slice(i, i+k);
    if (newStr.join('').length > longestStr.length) {
      longestStr = newStr.join('');
    }
  }
  return longestStr;
};

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))