/*

Codewars, 7k: Gryffindor vs Slytherin Quidditch Game

*/

function gameWinners(gryffindor, slytherin) {
  const gryScore = gryffindor.reduce((acc, curr) => curr === 'yes' ? acc + 150 : acc);
  const slyScore = slytherin.reduce((acc, curr) => curr === 'yes' ? acc + 150 : acc);
  return gryScore === slyScore ? 'It\'s a draw!' : gryScore > slyScore ? 'Gryffindor wins!' : 'Slytherin wins!';
};