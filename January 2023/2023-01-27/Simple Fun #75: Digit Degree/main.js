/*

Codewars, 7k: Simple Fun #75: Digit Degree

*/

function digitDegree(n, counter = 0) {  
  if (n < 10) return counter;
  const sumOfNum = +[...String(n)].reduce((acc, curr) => +acc + +curr);
  return sumOfNum < 10 ? ++counter : digitDegree(sumOfNum, ++counter);
}