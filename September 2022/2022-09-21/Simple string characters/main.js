/*

Codewars, 7k: Simple string characters


In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.

*/

const solve = s => {
  let upper = s.match(/[A-Z]/g, '').length;
  let lower = s.match(/[a-z]/g, '').length;
  let number = s.match(/\d/g, '').length;
  return [upper, lower, number, s.length - (upper + lower + number)];
}

console.log(solve("*'&ABCDabcde12345"))

