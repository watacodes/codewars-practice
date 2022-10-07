/*

Codewars, 7k: All Star Code Challenge #22


Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

Any remaining seconds left over are ignored.

3600 --> "1 hour(s) and 0 minute(s)"
3601 --> "1 hour(s) and 0 minute(s)"
3500 --> "0 hour(s) and 58 minute(s)"
323500 --> "89 hour(s) and 51 minute(s)"

*/

// 1 min = 60 sec
// 1 hr = 60 min
// 1 hr = 3600 sec

const toTime = sec => `${Math.floor(sec / 3600)} hour(s) and ${Math.floor(sec % 3600 / 60)} minute(s)`;

console.log(toTime(3500));