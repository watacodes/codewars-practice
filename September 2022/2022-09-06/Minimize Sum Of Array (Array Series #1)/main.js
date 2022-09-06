/*

Codewars, 7k: Minimize Sum Of Array (Array Series #1)

Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22)

*/

const minSum = arr => {
  let zeroToN = arr.length / 2;
  let copy = arr.slice(0);
  let ascending = copy.sort((a, b) => a - b).splice(zeroToN).reverse();
  let descending = arr.sort((a, b) => b - a).splice(zeroToN).reverse();
  let res = 0;
  for (let i = 0; i < zeroToN; i++) {
    res += ascending[i] * descending[i]; 
  }
  return res;
}

console.log(minSum([12,6,10,26,3,24]))

// 78 _ 144 _ 120
// arr[0] * arr[]