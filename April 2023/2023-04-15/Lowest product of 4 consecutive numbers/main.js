/*

Codewars, 6k: Lowest product of 4 consecutive numbers

*/

function lowestProduct(input) {
  if (input.length < 4) return 'Number is too small';
  const res = [];
  
  for (let i = 0; i < input.length - 3; i++) {
    const n = [...input].slice(i, i + 4).reduce((acc, curr) => acc * +curr, 1);
    res.push(n);
  }
  return Math.min(...res);
};