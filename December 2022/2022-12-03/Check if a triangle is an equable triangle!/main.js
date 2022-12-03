/*

Codewars, 7k: Check if a triangle is an equable triangle!

*/

const equableTriangle = (a, b, c) => {
  const p = (a + b + c) / 2;
  const area = (p * (p - a) * (p - b) * (p - c)) ** 0.5;
  return area === p * 2;
}

console.log(equableTriangle(5,12,13))