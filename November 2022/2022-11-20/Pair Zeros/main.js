/*

Codewars, 7k: Pair Zeros

*/

const pairZeros = arr => {
  let zeroCount = 0;
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      res.push(arr[i]);
    } else {
      if (zeroCount === 0) {
        res.push(zeroCount++);
      } else {
        zeroCount--;
      }
    }
  }
  return res;
}

console.log(pairZeros([1,0,1,0,2,0,0,3,0]))