/*

Codewars, 7k: 16+18=214

For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

*/


const add = (n1, n2) => {
  let n1Sum = n1.toString().split('').reverse();
  let n2Sum = n2.toString().split('').reverse();
  let max = Math.max(n1Sum.length, n2Sum.length);
  let arr = [];
  for (let i = 0; i < max; i++) {
    arr.push((Number(n1Sum[i]) || 0) + (Number(n2Sum[i]) || 0));
  }
  return parseInt(arr.reverse().join(''));
};

console.log(add(122, 81));