/*

Codewars, 7k: Can Santa save Christmas?

*/

const determineTime = arr => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  
  for (let time of arr) {
    hours += Number(time.slice(0, 2));
    minutes += Number(time.slice(3, 5));
    seconds += Number(time.slice(6));
  }

  if (seconds >= 60) {
    minutes += Math.floor(seconds % 60);
    seconds %= 60;
  }

  if (minutes >= 60) {
    hours += Math.floor(minutes / 60);
    minutes %= 60;
  }
  if (hours < 24) return true;
  if (hours === 24) {
    if (minutes > 0 || seconds || 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}