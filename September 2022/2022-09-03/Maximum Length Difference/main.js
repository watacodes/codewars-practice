/*

Codewars, 7k: Maximum Length Difference

You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

Bash note:
input : 2 strings with substrings separated by ,
output: number as a string

*/

const mxdiflg = (a1, a2) => {
  if (a1.length == 0 || a2.length == 0) return -1;
  let a1Arr = a1.map(a => a.length).sort((a, b) => a - b);
  let a2Arr = a2.map(b => b.length).sort((a, b) => a - b);
  if (a1Arr[a1Arr.length - 1] - a2Arr[0] > a2Arr[a2Arr.length - 1] - a1Arr[0]) {
    return Math.abs(a1Arr[a1Arr.length - 1] - a2Arr[0]);
  } else {
    return Math.abs(a2Arr[a2Arr.length - 1] - a1Arr[0]);
  }
};

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], 
["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))