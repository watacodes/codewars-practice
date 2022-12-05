/*

Codewars, 7k: Simple Fun #20: First Reverse Try

*/

const firstReverseTry = arr => {
  if (arr.length <= 1) return arr;
  const lastItem = arr.pop();
  const firstItem = arr.shift();
  arr.unshift(lastItem);
  arr.push(firstItem);
  return arr;
}

console.log(firstReverseTry([1,2,3,4,5]))