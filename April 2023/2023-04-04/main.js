/*

Codewars, 6k: Fix array sequence

*/

function solve(arr) {
  const first = arr.find(n => !arr.includes(n * 3) && !arr.includes(n / 2));
  const res = [first];
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr.includes(res[i] / 3)) {
      res.push(res[i] / 3);
    } else {
      res.push(res[i] * 2);
    }
  }
  
  return res;
}