/*

Codewars, 7k: Simple directions reversal

*/

const solve = arr => {
  return arr.reverse().map((item, idx, oArr) => {
    if (idx === 0) {
      return item.replace(/(Left)|(Right)/g, 'Begin');
    } else if (oArr[idx - 1].includes('Left')) {
      return item.replace(/(Left)|(Right)|(Begin)/, 'Right');
    } else if (oArr[idx - 1].includes('Right')) {
      return item.replace(/(Left)|(Right)|(Begin)/, 'Left');
    }
  });
}