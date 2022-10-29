/*

Codewars, 7k: 2022/10/30

[]  -->  []
[1]  -->  [1]
[2, 1]  -->  [1, 2, 1]
[1, 3, 2]  -->  [1, 2, 3, 2, 1]
[-8, 42, 18, 0, -16]  -->  [-16, -8, 0, 18, 42, 18, 0, -8, -16]
[-3, 15, 8, -1, 7, -1] --> [-3, -1, -1, 7, 8, 15, 8, 7, -1, -1, -3]

*/

const mirror = arr => {
  const copy = arr.slice(0);
  const arrAscending = copy.sort((a, b) => a - b).slice(0, -1);
  const arrDescending = copy.sort((a, b) => b - a);
  return arrAscending.concat(arrDescending);
};

console.log(mirror([1,3,2]));