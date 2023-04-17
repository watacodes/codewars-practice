/*

Codewars, 6k: Running Average

*/

function runningAverage() {
  let sum = 0;
  let size = 0;
  
  return num => {
    sum += num;
    size++;
    
    return Math.round(sum / size * 100) / 100;
  };
};