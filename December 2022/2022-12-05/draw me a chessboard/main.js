/*

Codewars, 7k: draw me a chessboard

*/

const chessBoard = (x, y) => {
  const board = [];
  let startWithWhite = false;
  for (let col = 0; col < x; col++) {
    let temp = [];
    for (let row = 0; row < y; row++) {
      if (!startWithWhite) {
        temp.push(row % 2 ? 'X' : 'O');
      } else {
        temp.push(row % 2 ? 'O' : 'X');
      }
    }
    !startWithWhite ? startWithWhite = true : startWithWhite = false;
    board.push(temp);
    temp = [];
  }
  return board;
}

console.log(chessBoard(6, 4));