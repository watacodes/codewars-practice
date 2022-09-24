/*

Codewars, 7k: Evens and Odds

This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.

*/

const evensAndOdds = n => n % 2 === 0 ? n.toString(2) : n.toString(16);
console.log(evensAndOdds(5));