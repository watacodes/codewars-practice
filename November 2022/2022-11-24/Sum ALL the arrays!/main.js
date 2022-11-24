/*

Codewars, 7k: Sum ALL the arrays!

*/

const arraySum = arr => {
  const flattenArray = arr.flat(Infinity).filter(a => typeof a === 'number');
  return flattenArray.reduce((acc, curr) => acc + curr, 0);
}




const testArr = [1, 2, 3];

console.log(arraySum(testArr));