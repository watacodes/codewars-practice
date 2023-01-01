/*

Codewars, 7k: No ifs no buts

*/

const noIfsNoButs = (a, b) => {
  switch(true) {
    case (a > b):
      return `${a} is greater than ${b}`;
      break;
    case (b > a):
      return `${a} is smaller than ${b}`;
      break;
    default:
      return `${a} is equal to ${b}`;
  }
}