/*

Codewars, 7k: Mean vs. Median

*/

const meanVsMedian = numbers => {
  const sortedNum = numbers.sort((a, b) => a - b);
  const median = numbers.length % 2 ? sortedNum[Math.floor(numbers.length / 2)] : sortedNum[numbers.length / 2];
  const mean = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
  return median === mean ? 'same' : median > mean ? 'median' : 'mean';
}