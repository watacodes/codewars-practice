/*

Codewars, 7k: Circle area inside square

*/

const squareAreaToCircle = size => {
  let side = Math.sqrt(size);
  return Math.pow(side / 2, 2) * Math.PI;
};