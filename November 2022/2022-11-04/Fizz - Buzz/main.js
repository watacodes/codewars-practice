/*

Codewars, 7k: Fizz - Buzz

*/

const solution = n => {
  let numA = [];
  let numB = [];
  let numC = [];

  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      numA.push(i);
    }
    if (i % 5 === 0 && i % 3 !== 0) {
      numB.push(i);
    }
    if (i % 15 === 0) {
      numC.push(i);
    }
  };

  return [numA.length, numB.length, numC.length];
};

console.log(solution(20));