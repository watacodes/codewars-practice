/*

Codewars, 6k: Time-like string format

*/

function solution(hour) {
  hour = hour.toString();
  const len = hour.length;
  if (len < 3 || len > 4) {
    throw new Error();
  } else {
    return hour.slice(0, -2) + ':' + hour.slice(-2);
  }
}