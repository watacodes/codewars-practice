/*

Codewars, 7k: nth Floyd line

*/

function nthFloyd(n) {
  let lastNum = 1;
  let r = 1;
  
  while (lastNum < n) {
    r++;
    lastNum += r;
  }
  
  return r;
};