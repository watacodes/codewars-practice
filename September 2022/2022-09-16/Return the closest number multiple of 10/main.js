/*

Codewars, 7k: Return the closest number multiple of 10

Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37
Expected output:

20
30
40

*/

const closestMultiple10 = n => Math.round(n / 10) * 10;