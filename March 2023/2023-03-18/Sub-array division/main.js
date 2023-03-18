/*

Codewars, 6k: Sub-array division

*/

const solve = (arr, n) => {
  const sum = [0];

  for (let i = 0; i < arr.length; i++) {
    const sumLen = sum.length;
    for (let k = 0; k < sumLen; k++) {
      const tempSum = arr[i] + sum[k];
      if (!(tempSum % n)) return true;
      sum.push(tempSum);
    }
  }

  return !(arr.reduce((a, b) => a + b) % n);
};