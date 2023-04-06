/*

Codewars, 6k: Largest Cross Sum

*/

function largestCrossSum(arr) {
  const rowSum = arr.map(e => e.reduce((acc, curr) => acc + curr, 0));
  const res = [];
  
  for (let i = 0; i < arr[0].length; i++) {
    const colSum = arr.map(e => e[i]).reduce((acc, curr) => acc + curr, 0);
    for (let k = 0; k < arr.length; k++) {
      res.push(colSum + rowSum[k] - arr[k][i]);
    }
  }
  
  return Math.max(...res);
}