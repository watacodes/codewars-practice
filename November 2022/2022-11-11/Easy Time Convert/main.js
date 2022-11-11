/*

Codewars, 7k: Easy Time Convert

*/

const timeConvert = num => {
  if (num <= 0) return "00:00";
  if (num < 10) return `00:0${num}`;
  if (num <= 59) return `00:${num}`;
  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  if (hours < 10) {
    hours = `0${hours}`; 
  }

  if (minutes < 10) {
    minutes = `0${minutes}`; 
  }
  return `${hours}:${minutes}`;
};

console.log(timeConvert(78))