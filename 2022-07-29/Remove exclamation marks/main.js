/*

Codewars 8k: https://www.codewars.com/kata/57a0885cbb9944e24c00008e

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

const removeExclamationMarks = str => str.replace(/!/g, '');

console.log(RemoveExclamationMarks('ABCD!!!'));