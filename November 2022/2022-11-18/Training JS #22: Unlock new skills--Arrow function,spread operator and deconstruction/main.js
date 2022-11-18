/*

Codewars, 7k: Training JS #22: Unlock new skills--Arrow function,spread operator and deconstruction

*/

const shuffleIt = (arr, ...arr2) => {
  for (let i of arr2) {
    let [a, b] = i;
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  return arr;
};

console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]));