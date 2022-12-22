/*

Codewars, 7k: Odd or Even? Determine that!

*/

const ODD = "Odd";
const EVEN = "Even";
const EITHER = "Either";

const oddOrEven = n => n % 2 ? EITHER : n / 2 % 2 ? ODD : EVEN;

// if n = 1 ? either
// if n = 2 ? n + (n + 1) = 2n + 1 = 
// if n = 3 ? (n - 1) + n + (n + 1) = 3n 
// if n = 4 ? (n - 1) + n + (n + 1) + (n + 1) = 4n + 1 =
// if n = 5 ? n + (n + 1) + (n + 2) + (n + 3) + (n + 4) = 5n + 10