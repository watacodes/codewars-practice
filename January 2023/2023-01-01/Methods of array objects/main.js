/*

Codewars, 7k: Methods of array objects

*/

const countGrade = scores => {
  const obj = {'S': 0, 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'X': 0};
  for (let i of scores) {
    if (i === 100) {
      obj['S']++;
    }
    if (i < 100 && i >= 90) {
      obj['A']++;
    }
    if (i < 90 && i >= 80) {
      obj['B']++;
    }
    if (i < 80 && i >= 60) {
      obj['C']++;
    }
    if (i < 60 && i >= 0) {
      obj['D']++;
    }
    if (i === -1) {
      obj['X']++;
    }
  }
  return obj;
}