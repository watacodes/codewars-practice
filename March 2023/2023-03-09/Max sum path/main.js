/*

Codewars, 5k: Max sum path

*/

function maxSumPath(l1, l2) {
  let i = 0;
  let k = 0;
  let xSum = 0;
  let ySum = 0;
  let res = 0;
  
  while (i < l1.length && k < l2.length) {
    let x = l1[i];
    let y = l2[k];
    if (x < y) {
      xSum += x;
      i++;
    } else if (x > y) {
      ySum += y;
      k++;
    } else {
      res += Math.max(xSum, ySum) + x;
      xSum = 0;
      ySum = 0;
      i++;
      k++;
    }
  }

  while (i < l1.length) {
    xSum += l1[i];
    i++;
  }

  while (k < l2.length) {
    ySum += l2[k];
    k++;
  }

  return Math.max(xSum, ySum) + res;
}