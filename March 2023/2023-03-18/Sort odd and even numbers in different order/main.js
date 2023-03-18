/*

Codewars, 6k: Sort odd and even numbers in different order

*/

function sortArray(arr) {
  const oddNums = arr.filter(e => e % 2).sort((a, b) => a - b);
  const evenNums = arr.filter(e => e % 2 === 0).sort((a, b) => b - a);
  return arr.map(e => e % 2 ? oddNums.shift() : evenNums.shift());
};



console.log(sortArray([5, 3, 2, 8, 1, 4]))
