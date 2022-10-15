/*

Codewars, 7k: Equal Sides Of An Array


*/

const findEvenIndex = (array, counter = 0)=> {
  if (counter > array.length) return -1;
  let currentIdx = counter;
  let leftSide = array.slice(0, currentIdx);
  let rightSide = array.slice(currentIdx + 1);
  return leftSide.reduce((a, b) => a + b, 0) === rightSide.reduce((c, d) => c + d, 0) ?
         currentIdx : findEvenIndex(array, currentIdx + 1);
};
console.log(findEvenIndex([1,100,50,-51,1,1]))