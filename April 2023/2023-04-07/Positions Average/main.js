/*

Codewars, 6k: Positions Average

*/

function posAverage(s) {
  const arr = s.split(', ');
  let counter = 0;
  let position = 0;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = 0; k < arr[i].length; k++) {
        if (arr[i][k] === arr[j][k])
          position++;
          counter++;
      }
    }
  }
  
  return 100 * position / counter;
}