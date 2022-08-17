/*

Codewars, 8k: https://www.codewars.com/kata/578a8a01e9fd1549e50001f1

In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

*/

const periodIsLate = (last, today, cycleLength) => {
  let getTime = last.getTime() - today.getTime();
  let convert = Math.abs(getTime / (1000 * 3600 * 24));
  return convert > cycleLength;
}