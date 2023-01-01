/*

Codewars, 7k: Mean Means

*/

const geo_mean = (nums, arith_mean) => {
  const sum = arith_mean * (nums.length + 1) - nums.reduce((acc, curr) => acc + curr, 0);
  nums.push(sum);
  return nums.reduce((acc, curr) => acc * curr) ** (1 / nums.length);
}