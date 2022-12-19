/*

Codewars, 7k: Change two-dimensional array

*/

const testArr = [
  [-1,  4, -5, -9,  3 ],
  [ 6, -4, -7,  4, -5 ],
  [ 3,  5,  0, -9, -1 ],
  [ 1,  5, -7, -8, -9 ],
  [-3,  2,  1, -5,  6 ]
];

const matrix = arr => {
  let arrCopy = arr.slice();
  for (let i = 0; i < arrCopy.length; i++) {
    if (arr[i][i] < 0) {
      arr[i].splice(i, 1, 0);
    } else {
      arr[i].splice(i, 1, 1);
    }
  }
  return arrCopy;
}

console.log(matrix(testArr));

