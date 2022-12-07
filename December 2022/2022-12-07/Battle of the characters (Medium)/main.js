/*

Codewars, 7k: Battle of the characters (Medium)

*/

const battle = (x, y) => {
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const countX = [...x].reduce((acc, curr) => {
    if (alpha.includes(curr)) {
      acc += alpha.indexOf(curr) + 1;
    } else {
      acc += (alpha.toLowerCase().indexOf(curr) + 1) / 2;
    }
    return acc;
  }, 0);

  const countY = [...y].reduce((acc, curr) => {
    if (alpha.includes(curr)) {
      acc += alpha.indexOf(curr) + 1;
    } else {
      acc += (alpha.toLowerCase().indexOf(curr) + 1) / 2;
    }
    return acc;
  }, 0);

  return countX === countY ? 'Tie!' : countX > countY ? x : y;
}

console.log(battle('One', 'Two'))

