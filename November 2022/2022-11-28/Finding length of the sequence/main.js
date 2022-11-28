/*

Codewars, 7k: Finding length of the sequence

*/


const lengthOfSequence = (arr, n) => {
  const idxArray = [];
  arr.forEach((item, i) => item === n ? idxArray.push(i) : 0);
  return idxArray.length !== 2 ? 0 : idxArray[1] - idxArray[0] + 1;
}


const testArr = [0, -3, 7, 4, 0, 3, 7, 9];
console.log(lengthOfSequence(testArr, 7));