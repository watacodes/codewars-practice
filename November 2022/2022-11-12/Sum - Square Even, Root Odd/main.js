/*

Codewars, 7k: Sum - Square Even, Root Odd

*/


// Input: arr of int
//     -> if int is even ? square the int
//     -> if not ? sqrt the int
//     -> return the sum, round it to 2 decimal places

const sumSquareEvenRootOdd = arr => {
  const convertedArr = arr.map(a => a % 2 === 0 ? a ** 2 : Math.sqrt(a));
  return +convertedArr.reduce((acc, curr) => acc + curr, 0).toFixed(2);
};

console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))
