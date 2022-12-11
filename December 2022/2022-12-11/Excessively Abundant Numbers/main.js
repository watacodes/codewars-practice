/*

Codewars, 7k: Excessively Abundant Numbers

*/

const abundantNumber = num => {
  let divisorSum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisorSum += i;
    }
  }
  return divisorSum > num;
}