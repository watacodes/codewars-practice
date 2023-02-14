/*

Codewars, 6k: Transform To Prime

*/

function minimumNumber(nums) {
  let sum = nums.reduce((acc, curr) => acc + curr, 0);
  let counter = 0;
  
  const primeCheck = num => {
    if (num < 2) return false;
    if (num % 2 === 0) return num === 2;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  if (primeCheck(sum)) return 0;
  
  while (!primeCheck(sum)) {
    sum++;
    counter++;
  }
  return counter++;
}