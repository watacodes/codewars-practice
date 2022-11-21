/*

Codewars, 7k: Sum of a nested list

*/

const nestedArr = [1, [2, [3, [4]]]];

console.log(nestedArr[1]);

const sumNested = arr => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(sumNested(arr[i]));
      console.log(res)
    } else {
      res.push(arr[i]);
    }
  }
  return res.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumNested(nestedArr));