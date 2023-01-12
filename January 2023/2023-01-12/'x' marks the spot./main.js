/*

Codewars, 7k: 'x' marks the spot.

*/

const xMarksTheSpot = (input) => {
  let count = 0;
  const xPos = [];
  
  for (let i in input) {
    for (let k = 0; k < input[i].length; k++) {
      if (input[i][k] === 'x') {
        count++;
        xPos.push(i, input[i].findIndex(e => e === 'x'));
      }
    }
  }
  return count > 1 ? [] : xPos.map(a => +a);
}