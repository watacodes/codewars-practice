/*

Codewars, 7k: Correct the time-string

A new task for you!

You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
Examples
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  

If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

*/

const timeCorrect = timeStr => {
  if (timeStr == '') return "";
  if (timeStr == null || !timeStr.match(/^[0-9:]{3}[0-9:]{3}[0-9:]{2}/g)) return null;
  let [hours, minutes, seconds] = timeStr.split(':');
  console.log(hours, minutes, seconds)
  if (seconds > 59) {
    seconds -= 60
    minutes++;
  }
  if (minutes > 59) {
    minutes -= 60
    hours++;
  }
  if (hours > 23) {
    hours = hours % 24;
  }
  if (hours < 10 && hours[0] != 0) {
    hours = '0' + `${hours}`;
  }
  if (minutes < 10 && minutes[0] != 0) {
    minutes = '0' + `${minutes}`;
  }
  if (seconds < 10 && seconds[0] != 0) {
    seconds = '0' + `${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
};

console.log(timeCorrect("11:70:10"))
let t = null;
console.log(typeof t)