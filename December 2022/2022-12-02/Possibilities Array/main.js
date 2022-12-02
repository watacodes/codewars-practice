/*

Codewars, 7k: Possibilities Array

*/

const isAllPossibilities = arr => {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const compareTo = [];
  
  for (let i = 0; i <= Math.max(...arr); i++) {
    compareTo.push(i);
  }
  
  return sortedArr.length ? compareTo.every((a, i) => a === sortedArr[i]) && sortedArr.length === compareTo.length : false;
}