/*

Codewars, 7k: Find the area of the rectangle!

*/

// d^2 = l^2 + x^2

const area = (d, l) => {
  if (d <= l) return 'Not a rectangle';
  const thirdLineSquared = d ** 2 - (l ** 2);
  return Number((thirdLineSquared ** (1 / 2) * l).toFixed(2));
}

console.log(area(10, 6))