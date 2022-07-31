/*

Codewars 8k:

The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

*/

// Input -> speed in km per hour
// Output -> speed in cm per second

// km -> m -> cm = 1000 * 100 = 100000
// hour -> min -> sec = 60 * 60 = 3600

// km per hour to cm per hour = 100000 / 3600

const cockroachSpeed = s => Math.floor(s * (100000 / 3600))

console.log(cockroachSpeed(1.08));