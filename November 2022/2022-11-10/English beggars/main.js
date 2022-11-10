/*

Codewars, 6k: English beggars


*/

const beggars = (arr, n) => {
  const sumArr = Array(n).fill(0);
  arr.forEach((a, i) => sumArr[i % n] += a);
  return sumArr;
};

