/*

Codewars 8k: https://www.codewars.com/kata/5933a1f8552bc2750a0000ed


1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0.


*/

// The first even number -> 0
// The second even number -> 2
// The fourth even number -> 6

// Formula (n - 1) * 2;

const nthEven = n => (n - 1) * 2;