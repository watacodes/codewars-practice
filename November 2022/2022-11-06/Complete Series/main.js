/*

Codewars, 7k: Complete Series

*/

const completeSeries = arr => {
  const newArr = [...new Set(arr)];
  if (newArr.length !== arr.length) return [0];

  let res = [];
  const max = Math.max(...arr);
  for (let i = 0; i <= max; i++) {
    res.push(i);
  };
  return res;
};