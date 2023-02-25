/*

Codewars, 5k: Land perimeter

*/

function landPerimeter(arr) {
  let perimeter = 0;
  
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[0].length; k++) {
      if (arr[i][k] === 'O') {
        continue;
      }
      perimeter += 4;
      if (i !== arr.length - 1 && arr[i+1][k] !== 'O') {
        perimeter -= 2;
      }
      if (k !== arr[0].length - 1 && arr[i][k+1] !== 'O') {
        perimeter -= 2;
      }
    }
  }
  return `Total land perimeter: ${perimeter}`;
}