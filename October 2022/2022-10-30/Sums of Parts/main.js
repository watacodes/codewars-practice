/*

Codewars, 6k: Sums of Parts


*/

const partsSums = arr => {
  if (arr.length === 0) return [0];
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  let res = [sum];
  for (let i = 1; i <= arr.length; i++) {
    sum -= arr[i - 1];
    res.push(sum);
  }
  return res;
};

console.log(partsSums([0,1,3,5,10]))