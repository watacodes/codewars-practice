/*

Codewars, 8k: https://www.codewars.com/kata/5748838ce2fab90b86001b1a

Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)


*/

// The length of the arc for this example is, r * 2 * pi / 4.
// The arc length will be given, so A = r * 2 * pi / 4.
// A = 2r * pi / 4
// 4A / pi = 2r
// 4A / pi / 2 ** 2;

const squareArea = a => Number(((4 * a / Math.PI / 2) ** 2).toFixed(2));
console.log(squareArea(2))