/*

Codewars, 7k: Simple Fun #87: Shuffled Array


For shuffled = [1, 12, 3, 6, 2], the output should be [1, 2, 3, 6].

1 + 3 + 6 + 2 = 12, which means that 1, 3, 6 and 2 are original elements of the array.

For shuffled = [1, -3, -5, 7, 2], the output should be [-5, -3, 2, 7].

[-5, -3, 1, 2, 7]

*/

const shuffledArray = arr => {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  arr.splice(arr.indexOf(sum / 2), 1);
  return arr.sort((a, b) => a - b);
}

const shuffled = [1, -3, -5, 7, 2]

console.log(shuffledArray(shuffled));
