/*

Codewars, 5k: Calculate Variance

*/

const variance = (arr) => {
  const mean = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  return arr.map((num, i) => Math.pow((num - mean), 2))
            .reduce((acc, curr) => acc + curr, 0) / arr.length;
};