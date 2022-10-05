/*

Codewars, 7k: Rotate for a Max

Task
Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.

56789 -> keep slice(1)
67895 -> 
68957 -> 
68579 -> 
68597

So max_rot (or maxRot or ... depending on the language) is such as:

max_rot(56789) should return 68957

max_rot(38458215) should return 85821534

*/

// const maxRot = n => {
//   let numArr = n.toString().split('');
//   console.log(numArr)
//   for (let i = 1; i < numArr.length - 1; i++) {
//     numArr = numArr.slice(0, i) + numArr.slice(i+1) + numArr[i];
//   }
//   return numArr;
// };

const maxRot = n => {
  let arr = n.toString().split('');
  let res = n;
  for (let i = 0; i < arr.length - 1; i++) {
    arr.push(arr.splice(i, 1));
    let temp = parseInt(arr.join(''));
    if (temp > res) {
      res = temp;
    }
  }
  return res;
}

console.log(maxRot(56789));