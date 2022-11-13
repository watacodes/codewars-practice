/*

Codewars, 7k: Pairs of integers from 0 to n

*/

const generatePairs = n => {
  // 0 <= a <= b <= n
  const res = [];
  for (let i = 0; i <= n; i++) {
    let tempArr = [];
    for (let j = 0; j <= n; j++) {
      tempArr.push([i, j]);
    }
    res.push(tempArr);
  };
  return res.flat().filter(a => a[0] <= a[1]);
};

console.log(generatePairs(2));