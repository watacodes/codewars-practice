/*

Codewars, 7k: Podcast Speed Listening Calculator

*/

const time = '01:20:00';

const speedListen = (audioLength, playSpeed) => {
  const audioArr = audioLength.split(':');
  let timeToSeconds = 0;

  for (let i = 0; i < audioArr.length; i++) {
    if (i === 0) {
      timeToSeconds += Number(audioArr[i]) * 3600;
    }
    if (i === 1) {
      timeToSeconds += Number(audioArr[i]) * 60;
    }
    if (i === 2) {
      timeToSeconds += Number(audioArr[i]);
    }
  }
  
  console.log(timeToSeconds);
  
  let dividedBySpeed = timeToSeconds / playSpeed;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  console.log(dividedBySpeed);
  while (dividedBySpeed >= 3600) {
    dividedBySpeed -= 3600;
    hours++;
  }

  while (dividedBySpeed >= 60) {
    dividedBySpeed -= 60;
    minutes++;
  }

  while (dividedBySpeed >= 1) {
    dividedBySpeed--;
    seconds++;
  }

  hours.toString().length === 1 ? hours = '0' + hours: hours;

  return `${hours}:${('0'+minutes).slice(-2)}:${('0'+seconds).slice(-2)}`; 

}

console.log(speedListen(time, 1.5))