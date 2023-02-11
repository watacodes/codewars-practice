/*

Codewars, 7k: The 12 Days of Christmas

*/

const comparator = (a, b) => {
  const firstNums = ['On', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'a'];
  return firstNums.indexOf(a.split(' ')[0]) - firstNums.indexOf(b.split(' ')[0]);
}