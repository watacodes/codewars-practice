/*

Codewars, 7k: Describe the shape

*/

const describeTheShape = angles => {
  return angles <= 2 
    ? 'this will be a line segment or a dot'
    : `This shape has ${angles} sides and each angle measures ${Math.floor((angles - 2) * 180 / angles)}`; 
}