/*

Codewars, 7k: Turn with a Compass

*/

const direction = (facing, turn) => {
  const direction = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const currentIdx = direction.indexOf(facing);
  const directionOrdered = direction.slice(currentIdx).concat(direction.slice(0, currentIdx));
  let move;
  if (turn >= 0) {
    move = turn / 45 % 8;
    return directionOrdered[move];
  } else {
    move = (Math.abs(turn / 45) - 1) % 8;
    return directionOrdered.reverse()[move];
  }
}