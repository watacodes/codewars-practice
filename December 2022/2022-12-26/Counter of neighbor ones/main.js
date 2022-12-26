/*

Codewars, 7k: Counter of neighbor ones

*/


const onesCounter = arr => {
  if (arr.every(a => a === 0)) return [];
  if (arr.every(a => a === 1)) return [arr.reduce((acc, curr) => acc + curr)];
  const res = [];
  let temp = 0;
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      temp = 0;
      idx = res.length;
    }
    if (arr[i] === 1) {
      temp++;
      res[idx] = temp;
    }
  }
  return res;
}