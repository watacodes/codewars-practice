/*

Codewars 8k: Lario and Muigi Pipe Problem

Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

*/
//if first index + 1 === first number, pass 1st
//if nth index + 1 !== nth number, pass 
const pipeFix = arr => {
  let emptyArr = [];
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    emptyArr.push(i);
  }
  return emptyArr;
};

console.log(pipeFix([1,2,3,5,6,8,9]));

