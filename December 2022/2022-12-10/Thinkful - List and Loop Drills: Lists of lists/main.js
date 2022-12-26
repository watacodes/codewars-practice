/*

Codewars, 7k: Thinkful - List and Loop Drills: Lists of lists

*/

const processData = data => {
  const mapped = data.map(arr => arr.reduce((acc, curr) => acc - curr));
  return mapped.reduce((acc, curr) => acc * curr);
}

console.log(processData([[2, 5], [3, 4], [8, 7]]));