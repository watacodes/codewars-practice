/*

Codewars, 7k: Is There an Odd Bit?

*/

const anyOdd = x => {
  const numToBinary = x.toString(2);
  return +[...numToBinary].reverse().map((num, i) => i % 2 ? +num : 0).includes(1); 
}


const bin = 85

console.log(bin.toString(2))
console.log(anyOdd(bin));