/*

Codewars, 7k: Sliding Puzzle Verification

*/

const isSolved = board => {
  const flattenedArr = board.flat();
  return flattenedArr.every((num, i) => +num === i);
}