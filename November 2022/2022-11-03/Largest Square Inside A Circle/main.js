/*

Codewars, 7k: Largest Square Inside A Circle

Determine the area of the largest square that can fit inside a circle with radius r.

*/

// Diameter of a circle = 2 * r;
// Diameter = Math.sqrt(2);
//  

const areaLargestSquare = r => {
  let side = r * 2 / Math.sqrt(2);
  return Math.round(side ** 2);
};

console.log(areaLargestSquare(5));