/*

Codewars, 6k: Maze Runner

@param maze = 2d arr, maze.

0 -> safe spot
1 -> wall, if you hit wall = dead
2 -> start point
3 -> finish point

*/

const mazeRunner = (maze, directions) => {
  let startX = 0;
  let startY = 0;
  let pointX = 0;
  let pointY = 0;

  for (let i = 0; i < maze.length; i++) {
    pointY = maze[i];
    for (let j = 0; j < pointY.length; j++) {
      pointX = pointY[j];
      if (pointX === 2) {
        startX = j;
        startY = i;
      }
    }
  }

  for (let k = 0; k < directions.length; k++) {
    switch(directions[k]) {
      case "N":
        startY--;
        break;
      case "E":
        startX++;
        break;
      case "S":
        startY++;
        break;
      case "W":
        startX--;
        break;
    }
    
    if (startY < 0 || startY > maze.length - 1 || startX < 0 || startX > maze.length - 1 || maze[startY][startX] === 1) {
      return "Dead";
    }

    if (maze[startY][startX] === 3) {
      return "Finish";
    };
  };
  return "Lost";
}

console.log(mazeRunner([[1,1,1,1,1,1,1],
  [1,0,0,0,0,0,3],
  [1,0,1,0,1,0,1],
  [0,0,1,0,0,0,1],
  [1,0,1,0,1,0,1],
  [1,0,0,0,0,0,1],
  [1,2,1,0,1,0,1]], ["N","N","N","N","N","E","E","E","E","E"]))